import { Box, Container, Button, Grid } from "@mui/material"
import { FC } from "react"
import { CustomInput } from "../form-components/CustomInput"
import { useForm, SubmitHandler } from "react-hook-form"
import { createUser } from "eventapp/services/users/users.service"
import { useRouter } from "next/router"

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

    const onSubmit: SubmitHandler<FormData> = async (formData) => {
        const response = await createUser(formData);

        try{
            if(!response.error){
                router.push('/');
            }
        } catch(error: any){
            console.log('ERROR: ', error)
        }
    };

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <CustomInput
                        type="text"
                        name="name"
                        label="Nombre"
                        control={control}
                        defaultValue={initialData.name || ''}
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
                        defaultValue={initialData.surname || ''}
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
                        defaultValue={initialData.email || ''}
                        placeholder="Ej: maria@perez.com"
                        required={true}
                    />
                </Grid>
                <Grid item xs={12}>
                    <CustomInput
                        type="password"
                        name="password"
                        label="Contraseña"
                        control={control}
                        defaultValue={initialData.password || ''}
                        placeholder="······"
                        required={true}
                    />
                </Grid>
                <Grid item xs={12}>
                    <CustomInput
                        type="password"
                        name="confirmPassword"
                        label="Confirmar contraseña"
                        control={control}
                        defaultValue={initialData.confirmPassword || ''}
                        placeholder="······"
                        required={true}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" className="button primaryButton">Registrarme</Button>
                </Grid>
            </Grid>
        </form>
    )
}