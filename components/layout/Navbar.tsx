import React, { FC, useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from '@mui/material';
import Image from 'next/image';
import { logOut } from '../../services/users/users.service';
import { useRouter } from "next/router";
import { ClientsMenu } from "../navBar/ClientsMenu";
import { ProvidersMenu } from "../navBar/ProvidersMenu";
import { ClientsLinks } from "../navBar/ClientsLinks";
import { ProvidersLinks } from "../navBar/ProvidersLinks";


export const Navbar:FC = () => {
    const router = useRouter();
    const isProvider = router.pathname === '/providers';

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
        router.push('/'); 
    }

    return (
        <AppBar position="static" className="bgWhite">
            <Toolbar className="toolbar">
                <Box display={"flex"} alignItems={"center"} gap={4}>
                    <Link href="/" underline="none"><Image src="/logo_positive.png" alt="Eventify" width={387} height={90} className="navbarImage"/></Link>
                    {!isProvider ? (
                        <ClientsLinks/>
                    ) : (
                        <ProvidersLinks/>
                    )}
                </Box>
                {!isProvider ? (
                    <ClientsMenu
                        auth={auth}
                        userEmail={userEmail}
                        userMenu={userMenu}
                        appBarMenu={appBarMenu}
                        handleAppBarMenu={handleAppBarMenu}
                        handleUserMenu={handleUserMenu}
                        handleClose={handleClose}
                        handleLogOut={handleLogOut}
                    />
                ) : (
                    <ProvidersMenu
                        auth={auth}
                        userEmail={userEmail}
                        userMenu={userMenu}
                        handleUserMenu={handleUserMenu}
                        handleClose={handleClose}
                        handleLogOut={handleLogOut}
                    />
                )}
            </Toolbar>
        </AppBar>
    );
}