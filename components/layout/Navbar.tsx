import React, { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link } from '@mui/material';
import Image from 'next/image';
import { logOut } from '../../services/users/users.service';
import { Logout, Redeem, Settings, SupervisorAccount } from "@mui/icons-material";

export default function Navbar() {
    const [auth, setAuth] = useState(false);
    const [userEmail, setUserEmail] = useState('');

    const [userMenu, setUserMenu] = useState<null | HTMLElement>(null);
    const [appBarMenu, setAppBarMenu] = useState<null | HTMLElement>(null);

    useEffect(() => {
        const localLogin = localStorage.getItem('loginUser');
        if (localLogin) {
            setAuth(true);
            const { email } = JSON.parse(localLogin);
            setUserEmail(email);
        }
    }, []);

    const handleAppBarMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAppBarMenu(event.currentTarget);
    };

    const handleUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setUserMenu(event.currentTarget);
    };

    const handleClose = () => {
        setUserMenu(null);
        setAppBarMenu(null);
    };

    const handleLogOut = () => {
        logOut();
        setUserEmail('')
        setAuth(false);
    }

    return (
        <AppBar position="static" className="bgWhite">
            <Toolbar className="toolbar">
                <Box display={"flex"} alignItems={"center"} gap={4}>
                    <Link href="/" underline="none"><Image src="/logo_positive.png" alt="Eventify" width={387} height={90} className="navbarImage"/></Link>
                    <Box className="menuButtonGroup hideXs hideSm">
                        <Link href="/services" underline="none" className="link primaryLink"><Redeem/> Servicios</Link>
                        <Link href="/providers" underline="none" className="link primaryLink"><SupervisorAccount/> Proveedores</Link>
                    </Box>
                </Box>
                {auth ? (
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
                                <Link href="/users/profile" underline="none" className="link primaryLink"><AccountCircle/> Mi perfil</Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Link href="/users/account" underline="none" className="link primaryLink"><Settings/> Mi cuenta</Link>
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
                )}
            </Toolbar>
        </AppBar>
    );
}