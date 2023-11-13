import { Box, Button, Container, Grid, Link, Typography } from "@mui/material"
import { FC, useState } from "react"
import { CustomInput } from "../form-components/CustomInput"
import { useForm, SubmitHandler } from "react-hook-form"
import { createUser } from "eventapp/services/users/users.service"
import { useRouter } from "next/router"
import { comparePassword, validateEmail, validatePasswordLength } from "utils/validations"
import { Toast } from "../form-components/Toast"
import { ArrowBack } from "@mui/icons-material"
import Image from "next/image"

interface FormData {
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    confirmPassword: string;
    type: string;
}


const initialData = {
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: ''
}

export const ClientsRegisterForm: FC = () => {
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
            <Box className="authImgBox hideXs">
                <Image width={256} height={171} src={"/auth-background.png"} alt={"Registrarme"}/>
            </Box>
            <Box className="authFormBox">
                <Link href="/" underline="none" className="grayLink" mt={2} mb={2} display={"flex"}><ArrowBack/></Link>
                <Typography variant="h4" mt={2} mb={4} className="colorGray">Registrarme</Typography>
                <Box component="form" onSubmit={handleSubmit(onSubmit)} mb={2}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <CustomInput
                                type="text"
                                name="firstname"
                                label="Nombre"
                                control={control}
                                defaultValue={initialData.name}
                                placeholder="Ej: María"
                                required={true}
                                className="input"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <CustomInput
                                type="text"
                                name="lastname"
                                label="Apellido"
                                control={control}
                                defaultValue={initialData.surname}
                                placeholder="Ej: Pérez"
                                required={true}
                                className="input"
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
                                className="input"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" className="button primaryButton">Registrarme</Button>
                        </Grid>
                    </Grid>
                </Box>
                <Box display={"flex"} justifyContent={"center"}>
                    <Link href="/clients/login" underline="none" className="primaryLink"><span className="colorGray">¿Ya tienes usuario?</span> Haz clic aquí</Link>
                </Box>
            </Box>
        </Container>
    )
}