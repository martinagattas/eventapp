import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link } from '@mui/material';
import { CalendarMonth, Logout, Redeem } from "@mui/icons-material";
import { Login } from "types/users/LoginType";

export const ProvidersMenu = ({auth, userEmail, userMenu, handleUserMenu, handleClose, handleLogOut}: Login) => {
    return (
        auth ? (
            <Box display={"flex"} alignItems={"center"} gap={.5}>
                <span className="colorPrimary hideXs">{userEmail}</span>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="user-menu"
                    aria-haspopup="true"
                    onClick={handleUserMenu}
                >
                    <AccountCircle />
                </IconButton>
                <Menu
                    id="user-menu"
                    anchorEl={userMenu}
                    open={Boolean(userMenu)}
                    onClose={handleClose}
                    className="appBar"
                >
                    <MenuItem onClick={handleClose}>
                        <Link href="/providers/profile" underline="none" className="link primaryLink"><AccountCircle/> Mi cuenta</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link href="/providers/services" underline="none" className="link primaryLink"><Redeem/> Mis servicios</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link href="/providers/services" underline="none" className="link primaryLink"><CalendarMonth/> Mi agenda</Link>
                    </MenuItem>
                    <MenuItem onClick={handleLogOut} className="buttonsBox">
                        <Link underline="none" className="link primaryLink"><Logout/> Cerrar sesión</Link>
                    </MenuItem>
                </Menu>
            </Box>
        ) : (
            <Link href="/providers/register" underline="none" className="buttonOutlineLink primaryLink">Registrarme</Link>
        )
    );
}