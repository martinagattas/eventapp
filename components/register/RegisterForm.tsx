import { Box, Container, Button } from "@mui/material"
import { FC } from "react"
import { CustomInput } from "../form-components/CustomInput"
import { useForm, SubmitHandler } from "react-hook-form"

interface Props {
    data: any
}

export const RegisterForm: FC<Props> = ({data}) => {
    const { control, handleSubmit } = useForm<Props>();

    const onSubmit: SubmitHandler<Props> = (formData) => {
        console.log(formData);
    };

    return(
        <Container>
            <Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <CustomInput
                        type="text"
                        name="name"
                        label="Nombre"
                        control={control}
                        defaultValue={data.name || ''}
                        placeholder="Ej: María"
                    />
                    <CustomInput
                        type="text"
                        name="lastname"
                        label="Apellido"
                        control={control}
                        defaultValue={data.lastname || ''}
                        placeholder="Ej: Pérez"
                    />
                    <CustomInput
                        type="email"
                        name="email"
                        label="Email"
                        control={control}
                        defaultValue={data.email || ''}
                        placeholder="Ej: maria@perez.com"
                    />
                    <CustomInput
                        type="password"
                        name="password"
                        label="Contraseña"
                        control={control}
                        defaultValue={data.password || ''}
                        placeholder="······"
                    />
                    <CustomInput
                        type="password"
                        name="confirmPassword"
                        label="Confirmar contraseña"
                        control={control}
                        defaultValue={data.confirmPassword || ''}
                        placeholder="······"
                    />
                    <Button type="submit" variant="contained" color="primary">Registrarme</Button>
                </form>
            </Box>
        </Container>
    )
}