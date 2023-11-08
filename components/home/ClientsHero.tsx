import React, { FC } from "react";
import { Box, Typography, Link } from '@mui/material';

export const ClientsHero:FC = () => {
    return (
        <main className="container clientsHero">
            <Box>
                <Typography variant="h1" mb={2}>ORGANIZA <br className="hideSm"/>TU EVENTO</Typography>
                <Typography variant="body1" mb={2}><span className="bgWhite">La plataforma perfecta para la planificación y organización de tus eventos.</span></Typography>
                <Typography variant="body1" mb={4}><span className="bgWhite">Conecta con los mejores proveedores y transforma tus sueños en realidad. ¡Haz que tu evento sea inolvidable!</span></Typography>
                <Link href="/clients/register" underline="none" className="buttonOutlineLink whiteLink">Registrarme</Link>
            </Box>
        </main>
    )
}