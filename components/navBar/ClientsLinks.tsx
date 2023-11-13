import { Redeem, SupervisorAccount } from '@mui/icons-material';
import { Box, Link } from '@mui/material';

export const ClientsLinks = () => {
    return (
        <Box className="menuButtonGroup hideXs hideSm">
            <Link href="/services/new" underline="none" className="link primaryLink"><Redeem/> Servicios</Link>
            <Link href="/providers" underline="none" className="link primaryLink"><SupervisorAccount/> Proveedores</Link>
        </Box>
    )
}