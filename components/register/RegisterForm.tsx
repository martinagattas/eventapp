import { Box, Container, Button } from "@mui/material"
import { FC } from "react"
import { CustomInput } from "../form-components/CustomInput"
import { useForm, SubmitHandler } from "react-hook-form"
import styles from "../../styles/global.module.scss"
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
        <Container>
            <Box>
                <form onSubmit={handleSubmit(onSubmit)} className={`${styles.dFlexColumn} ${styles.gap}`}>
                    <CustomInput
                        type="text"
                        name="name"
                        label="Nombre"
                        control={control}
                        defaultValue={initialData.name || ''}
                        placeholder="Ej: María"
                        required={true}
                    />
                    <CustomInput
                        type="text"
                        name="surname"
                        label="Apellido"
                        control={control}
                        defaultValue={initialData.surname || ''}
                        placeholder="Ej: Pérez"
                        required={true}
                    />
                    <CustomInput
                        type="email"
                        name="email"
                        label="Email"
                        control={control}
                        defaultValue={initialData.email || ''}
                        placeholder="Ej: maria@perez.com"
                        required={true}
                    />
                    <CustomInput
                        type="password"
                        name="password"
                        label="Contraseña"
                        control={control}
                        defaultValue={initialData.password || ''}
                        placeholder="······"
                        required={true}
                    />
                    <CustomInput
                        type="password"
                        name="confirmPassword"
                        label="Confirmar contraseña"
                        control={control}
                        defaultValue={initialData.confirmPassword || ''}
                        placeholder="······"
                        required={true}
                    />
                    <Button type="submit" variant="contained" color="primary">Registrarme</Button>
                </form>
            </Box>
        </Container>
    )
}