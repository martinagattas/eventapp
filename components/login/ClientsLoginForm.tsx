import { Box, Container, Link, Typography } from "@mui/material"
import { ArrowBack } from "@mui/icons-material"
import Image from "next/image"
import { LoginForm } from "./LoginForm"

export const ClientsLoginForm = () => {
    return(
        <Container className="authForm">
            <Box className="authImgBox hideXs">
                <Image width={256} height={171} src={"/auth-background.png"} alt={"Iniciar sesión"}/>
            </Box>
            <Box className="authFormBox">
                <Link href="/" underline="none" className="grayLink" mt={2} mb={2} display={"flex"}><ArrowBack/></Link>
                <Typography variant="h4" mt={2} mb={4} className="colorGray">Iniciar sesión</Typography>
                <LoginForm/>
                <Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={2}>
                    <Link href="/" underline="none" className="grayLink">Olvidé mi contraseña</Link>
                    <Link href="/clients/register" underline="none" className="primaryLink"><span className="colorGray">¿Aún no tienes usuario?</span> Haz clic aquí</Link>
                    <Link href="/providers/register" underline="none" className="primaryLink"><span className="colorGray">¿Eres proveedor?</span> Haz clic aquí</Link>
                </Box>
            </Box>
        </Container>
    )
}