import { Box, Button, Container, Grid, Link, Typography } from "@mui/material"
import { FC, useState } from "react"
import { CustomInput } from "../form-components/CustomInput"
import { useForm, SubmitHandler } from "react-hook-form"
import { createUser } from "eventapp/services/users/users.service"
import { useRouter } from "next/router"
import { comparePassword, validateEmail, validatePasswordLength } from "utils/validations"
import Toast from "../form-components/Toast"

interface FormData {
    name: string;
    surname: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const initialData = {
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: ''
}

export const RegisterForm: FC = () => {
    const router = useRouter();
    const { control, handleSubmit } = useForm<FormData>();

    const [emailError, setEmailError] = useState<boolean>(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState<string | undefined>(undefined);

    const [pswError, setPswError] = useState<boolean>(false);
    const [pswErrorMessage, setPswErrorMessage] = useState<string | undefined>(undefined);

    const [confirmPswError, setConfirmPswError] = useState<boolean>(false);
    const [confirmPswErrorMessage, setConfirmPswErrorMessage] = useState<string | undefined>(undefined);

    const [credentialsError, setCredentialsError] = useState<boolean>(false);
    const [credentialsErrorMessage, setCredentialsErrorMessage] = useState<string | undefined>(undefined);

    const handleCloseToast = () => {
        setCredentialsError(false);
    };

    const onSubmit: SubmitHandler<FormData> = async (formData) => {
        const emailValidation = validateEmail(formData.email);
        const passwordValidation = validatePasswordLength(formData.password);
        const passwordComparation = comparePassword(formData.password, formData.confirmPassword);

        setEmailError(emailValidation !== undefined);
        setEmailErrorMessage(emailValidation);
        setPswError(passwordValidation !== undefined);
        setPswErrorMessage(passwordValidation);
        setConfirmPswError(passwordComparation !== undefined);
        setConfirmPswErrorMessage(passwordComparation);
    
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

        if (passwordComparation) {
            setConfirmPswError(true);
            setConfirmPswErrorMessage(passwordComparation);
            return;
        }

        const response = await createUser(formData);

        try{
            if(!response.error){
                router.push('/');
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
        <Container className="authForm">
            <Toast open={credentialsError} onClose={handleCloseToast} severity="error" message={credentialsErrorMessage}/>
            <Typography variant="h4" mb={2} className="colorPrimary">Registrarme</Typography>
            <Box component="form" onSubmit={handleSubmit(onSubmit)} mb={2}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <CustomInput
                            type="text"
                            name="name"
                            label="Nombre"
                            control={control}
                            defaultValue={initialData.name}
                            placeholder="Ej: María"
                            required={true}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CustomInput
                            type="text"
                            name="surname"
                            label="Apellido"
                            control={control}
                            defaultValue={initialData.surname}
                            placeholder="Ej: Pérez"
                            required={true}
                        />
                    </Grid>
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
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CustomInput
                            type="password"
                            name="confirmPassword"
                            label="Confirmar contraseña"
                            control={control}
                            defaultValue={initialData.confirmPassword}
                            placeholder="······"
                            required={true}
                            error={confirmPswError}
                            helperText={confirmPswErrorMessage}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" className="button primaryButton">Registrarme</Button>
                    </Grid>
                </Grid>
            </Box>
            <Box display={"flex"} justifyContent={"center"}>
                <Link href="/login" underline="none" className="primaryLink">Iniciar sesión</Link>
            </Box>
        </Container>
    )
}