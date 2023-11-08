import { Box, Button, Grid } from "@mui/material"
import { FC, useState } from "react"
import { CustomInput } from "../form-components/CustomInput"
import { useForm, SubmitHandler } from "react-hook-form"
import { loginUser } from "eventapp/services/users/users.service"
import { useRouter } from "next/router"
import { validateEmail, validatePasswordLength } from "utils/validations"
import { Toast } from "../form-components/Toast"

interface FormData {
    email: string;
    password: string;
}

const initialData = {
    email: '',
    password: '',
}

export const LoginForm: FC = () => {
    const router = useRouter();
    const isProvider = router.pathname === '/providers';

    const { control, handleSubmit } = useForm<FormData>();

    const [emailError, setEmailError] = useState<boolean>(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState<string | undefined>(undefined);

    const [pswError, setPswError] = useState<boolean>(false);
    const [pswErrorMessage, setPswErrorMessage] = useState<string | undefined>(undefined);

    const [credentialsError, setCredentialsError] = useState<boolean>(false);
    const [credentialsErrorMessage, setCredentialsErrorMessage] = useState<string | undefined>(undefined);

    const handleCloseToast = () => {
        setCredentialsError(false);
    };

    const onSubmit: SubmitHandler<FormData> = async (formData) => {
        const emailValidation = validateEmail(formData.email);
        const passwordValidation = validatePasswordLength(formData.password);
    
        setEmailError(emailValidation !== undefined);
        setEmailErrorMessage(emailValidation);
        setPswError(passwordValidation !== undefined);
        setPswErrorMessage(passwordValidation);

        if (emailValidation) {
            setEmailError(true);
            setEmailErrorMessage(emailValidation);
            return;
        }
    
        if (passwordValidation) {
            setPswError(true);
            setPswErrorMessage(passwordValidation);
            return;
        }

        const response = await loginUser(formData);

        try{
            if(!response.error){
                router.push(isProvider ? '/providers' : '/');
            } else{
                setCredentialsError(true);
                setCredentialsErrorMessage(`${response.error}: ${response.message}`);
            }
        } catch(error: any){
            setCredentialsError(true);
            setCredentialsErrorMessage(`${response.error}: ${response.message}`);
        }
    };

    return(
        <>
            <Toast open={credentialsError} onClose={handleCloseToast} severity="error" message={credentialsErrorMessage}/>
            <Box component="form" onSubmit={handleSubmit(onSubmit)} mb={2}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <CustomInput
                            type="email"
                            name="email"
                            label="Email"
                            control={control}
                            defaultValue={initialData.email}
                            placeholder="Ej: maria@perez.com"
                            required={true}
                            error={emailError}
                            helperText={emailErrorMessage}
                            className="input"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CustomInput
                            type="password"
                            name="password"
                            label="Contraseña"
                            control={control}
                            defaultValue={initialData.password}
                            placeholder="······"
                            required={true}
                            error={pswError}
                            helperText={pswErrorMessage}
                            className="input"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" className="button primaryButton">Iniciar sesión</Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}