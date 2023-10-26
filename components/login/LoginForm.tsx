import { Box, Button, Container, Grid, Link, Typography } from "@mui/material"
import { FC, useState } from "react"
import { CustomInput } from "../form-components/CustomInput"
import { useForm, SubmitHandler } from "react-hook-form"
import { loginUser } from "eventapp/services/users/users.service"
import { useRouter } from "next/router"
import Toast from "../form-components/Toast"
import { validateEmail, validatePasswordLength } from "utils/validations"
import { ArrowBack } from "@mui/icons-material"

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
            <Box className="authImgBox hideXs">
                <Link href="/" underline="none" className="whiteLink" mt={2} mb={2} display={"flex"}><ArrowBack/></Link>
            </Box>
            <Box className="authFormBox">
                <Link href="/" underline="none" className="grayLink hideSm" mt={2} mb={2} display={"flex"}><ArrowBack/></Link>
                <Typography variant="h4" mt={2} mb={4} className="colorGray">Iniciar sesión</Typography>
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
                            <Button type="submit" variant="contained" className="button primaryButton">Iniciar sesión</Button>
                        </Grid>
                    </Grid>
                </Box>
                <Box display={"flex"} justifyContent={"space-between"} gap={2}>
                    <Link href="/" underline="none" className="grayLink">Olvidé mi contraseña</Link>
                    <Link href="/register" underline="none" className="primaryLink">Registrarme</Link>
                </Box>
            </Box>
        </Container>
    )
}