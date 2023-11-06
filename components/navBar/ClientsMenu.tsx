import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link } from '@mui/material';
import { CalendarMonth, Logout, Redeem, SupervisorAccount } from "@mui/icons-material";
import { Login } from "types/users/LoginType";

export const ClientsMenu = ({auth, userEmail, userMenu, appBarMenu, handleAppBarMenu, handleUserMenu, handleClose, handleLogOut}: Login) => {
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
                        <Link href="/clients/profile" underline="none" className="link primaryLink"><AccountCircle/> Mi cuenta</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link href="/clients/reservations" underline="none" className="link primaryLink"><CalendarMonth/> Mis reservas</Link>
                    </MenuItem>
                    <MenuItem onClick={handleLogOut} className="buttonsBox">
                        <Link underline="none" className="link primaryLink"><Logout/> Cerrar sesión</Link>
                    </MenuItem>
                </Menu>
            </Box>
        ) : (
            <>
                <IconButton
                    size="large"
                    aria-label="menu"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleAppBarMenu}
                    className="menuButton hideMd"
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={appBarMenu}
                    open={Boolean(appBarMenu)}
                    onClose={handleClose}
                    className="appBar"
                >
                    <MenuItem onClick={handleClose}>
                        <Link href="/services" underline="none" className="link primaryLink"><Redeem/> Servicios</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link href="/providers" underline="none" className="link primaryLink"><SupervisorAccount/> Proveedores</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link href="/providers" underline="none" className="link primaryLink"><SupervisorAccount/> Admin</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose} className="buttonsBox">
                        <Link href="/clients/login" underline="none" className="buttonOutlineLink primaryLink">Iniciar sesión</Link>
                        <Link href="/clients/register" underline="none" className="buttonLink buttonPrimaryLink">Registrarme</Link>
                    </MenuItem>
                </Menu>
                <Box display={"flex"} alignItems={"center"} gap={2} className="hideXs hideSm">
                    <Link href="/providers" underline="none" className="link primaryLink"><SupervisorAccount/> Admin</Link>
                    <Link href="/clients/login" underline="none" className="buttonOutlineLink primaryLink">Iniciar sesión</Link>
                    <Link href="/clients/register" underline="none" className="buttonLink buttonPrimaryLink">Registrarme</Link>
                </Box>
            </>
        )
    );
}