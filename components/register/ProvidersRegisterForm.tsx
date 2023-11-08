import { Box, Button, Container, Grid, Link, MenuItem, SelectChangeEvent, Typography } from "@mui/material"
import { FC, useState } from "react"
import { CustomInput } from "../form-components/CustomInput"
import { useForm, SubmitHandler } from "react-hook-form"
import { createUser } from "eventapp/services/users/users.service"
import { useRouter } from "next/router"
import { comparePassword, validateEmail, validatePasswordLength } from "utils/validations"
import { Toast } from "../form-components/Toast"
import { ArrowBack } from "@mui/icons-material"
import { CustomSelect } from "../form-components/CustomSelect"

interface FormData {
    name: string,
    surname: string,
    province: string,
    country: string,
    phone: number,
    service_type: string,
    email: string,
    password: string,
    confirmPassword: string
}

const initialData = {
    name: '',
    surname: '',
    province: '',
    country: '',
    phone: 0,
    service_type: '',
    email: '',
    password: '',
    confirmPassword: ''
}

export const ProvidersRegisterForm: FC = () => {
    const router = useRouter();
    const { control, handleSubmit } = useForm<FormData>();

    const [serviceType, setServiceType] = useState<string>('');

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

    const handleChange = (event: SelectChangeEvent) => {
        setServiceType(event.target.value);
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
                router.push('/providers');
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
        <Container>
            <Toast open={credentialsError} onClose={handleCloseToast} severity="error" message={credentialsErrorMessage}/>
            <Box>
                <Link href="/providers" underline="none" className="grayLink" mt={2} mb={2} display={"flex"}><ArrowBack/></Link>
                <Typography variant="h4" mt={2} mb={4} className="colorGray">Registrarme</Typography>
                <Box component="form" onSubmit={handleSubmit(onSubmit)} mb={2}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <CustomInput
                                type="text"
                                name="name"
                                label="Nombre"
                                control={control}
                                defaultValue={initialData.name}
                                placeholder="Ej: María"
                                required={true}
                                className="input"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <CustomInput
                                type="text"
                                name="surname"
                                label="Apellido"
                                control={control}
                                defaultValue={initialData.surname}
                                placeholder="Ej: Pérez"
                                required={true}
                                className="input"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <CustomInput
                                type="text"
                                name="province"
                                label="Provincia"
                                control={control}
                                defaultValue={initialData.province}
                                placeholder="Ej: Mendoza"
                                required={true}
                                className="input"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <CustomInput
                                type="text"
                                name="country"
                                label="País"
                                control={control}
                                defaultValue={initialData.country}
                                placeholder="Ej: Argentina"
                                required={true}
                                className="input"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <CustomInput
                                type="number"
                                name="phone"
                                label="Teléfono"
                                control={control}
                                placeholder="Ej: +54 9 261 500 0000"
                                required={true}
                                className="input"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <CustomSelect
                                name="service_type"
                                label="Servicio que ofrece"
                                control={control}
                                defaultValue={initialData.service_type}
                                value={serviceType}
                                required={true}
                                onChange={handleChange}
                                className="select"
                            >
                                <MenuItem value="" disabled><em>None</em></MenuItem>
                                <MenuItem value="photography">Fotografía</MenuItem>
                                <MenuItem value="food">Catering</MenuItem>
                                <MenuItem value="website">Página web</MenuItem>
                                <MenuItem value="video">Video</MenuItem>
                                <MenuItem value="music">Música</MenuItem>
                                <MenuItem value="decoration">Decoración</MenuItem>
                                <MenuItem value="flowers">Florería</MenuItem>
                                <MenuItem value="invitation">Diseño de invitaciones</MenuItem>
                                <MenuItem value="place">Alquiler de espacios</MenuItem>
                                <MenuItem value="tent">Alquiler de carpas</MenuItem>
                                <MenuItem value="car">Alquiler de autos</MenuItem>
                                <MenuItem value="living">Alquiler de livings</MenuItem>
                            </CustomSelect>
                        </Grid>
                        <Grid item xs={12} sm={6}>
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
                        <Grid item xs={12} sm={6}>
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
                        <Grid item xs={12} sm={6}>
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
            </Box>
        </Container>
    )
}