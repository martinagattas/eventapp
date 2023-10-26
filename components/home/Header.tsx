import { Box, Typography, Link } from '@mui/material';
import * as React from 'react';

export default function Header() {
    return (
        <main className="container">
            <Box>
                <Typography variant="h1" mb={2}>ORGANIZA <br className="hideSm"/>TU EVENTO</Typography>
                <Typography variant="body1" mb={2}><span className="bgWhite">La plataforma perfecta para la planificación y organización de tus eventos.</span></Typography>
                <Typography variant="body1" mb={4}><span className="bgWhite">Conecta con los mejores proveedores y transforma tus sueños en realidad. ¡Haz que tu evento sea inolvidable!</span></Typography>
                <Link href="/register" underline="none" className="outlineLink whiteLink">Registrarme</Link>
            </Box>
        </main>
    )
}