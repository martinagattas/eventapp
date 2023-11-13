import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { Toast } from '../form/Toast';
import { comparePassword, validateEmail, validatePasswordLength } from 'utils/validations';
import { CustomLink } from '../form/CustomLink';
import { CustomInput } from '../form/CustomInput';
import { CustomButton } from '../form/CustomButton';
import { CustomTitle } from '../layout/CustomTitle';
import s from '../../styles/auth/RegisterForm.module.css';

interface RegisterFormI {
  name: string,
  surname: string,
  email: string,
  password: string,
  confirmPassword: string
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
  const { control, handleSubmit } = useForm<RegisterFormI>();

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

  const onSubmit: SubmitHandler<RegisterFormI> = async (formData) => {
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

    // fixMe: agregar register service
    // const response = await createUser(formData);

    // try{
    //   if(!response.error){
    //     router.push('/');
    //   } else{
    //     setCredentialsError(true);
    //     setCredentialsErrorMessage(`${response.error}: ${response.message}`);
    //   }
    // } catch(error: any){
    //   setCredentialsError(true);
    //   setCredentialsErrorMessage(`${response.error}: ${response.message}`);
    // }
  };

  return(
    <Container>
      <Toast open={credentialsError} onClose={handleCloseToast} severity="error" message={credentialsErrorMessage}/>
      <Box>
        <CustomLink href="/" underline="none" customVariant="link" customColor="gray"><ArrowBack/></CustomLink>
        <CustomTitle color="gray" htmlTag="h2" text="Registrarme"/>
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
              <CustomButton type="submit" variant="contained" customColor="primary">Registrarme</CustomButton>
            </Grid>
          </Grid>
        </Box>
        <Box display={"flex"} justifyContent={"center"}>
          <CustomLink href="/auth/login" underline="none" customVariant="link" customColor="primary"><span className={s['link-description']}>¿Ya tienes usuario?</span> Haz clic aquí</CustomLink>
        </Box>
      </Box>
    </Container>
  )
}