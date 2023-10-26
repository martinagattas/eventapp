import * as React from 'react';
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

export default function Navbar() {
    const [auth, setAuth] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" className="bgWhite">
            <Toolbar className="toolbar">
                <Box display={"flex"} alignItems={"center"}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        className="menuButton hideSm"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Image src="/logo_positive.png" alt="Eventify" width={387} height={90} className="navbarImage"/>
                    <Box className="menuButtonGroup hideXs">
                        <Link href="/" underline="none" className="primaryLink">Servicios</Link>
                        <Link href="/" underline="none" className="primaryLink">Proveedores</Link>
                    </Box>
                </Box>

                {auth ? (
                    <Box>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                        </Menu>
                    </Box>
                ) : (
                    <Box display={"flex"} alignItems={"center"} gap={2}>
                        <Link href="/register" underline="none" className="outlineLink primaryLink hideSm">Ingresar</Link>
                        <Link href="/login" underline="none" className="primaryLink hideXs">Iniciar sesión</Link>
                        <Link href="/register" underline="none" className="outlineLink primaryLink hideXs">Registrarme</Link>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
}