import { Box, Link } from "@mui/material"
import { LoginForm } from "./LoginForm"

export const ProvidersLoginForm = () => {
    return(
        <Box>
            <LoginForm/>
            <Box display={"flex"} justifyContent={"center"}>
                <Link href="/" underline="none" className="grayLink">Olvidé mi contraseña</Link>
            </Box>
        </Box>
    )
}