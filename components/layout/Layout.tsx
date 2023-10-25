import React, { FC, PropsWithChildren } from "react";
import { Stack } from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface Props extends PropsWithChildren{
    variant: 'general' | 'auth'
}

export const Layout: FC<Props> = ({ children, variant }: Props) => {
    return (
        <Stack className={variant === 'general' ? 'container generalContainer' : 'container authContainer'}>
            {variant === 'general' && <Navbar />}
            {children}
            {variant === 'general' && <Footer />}
        </Stack>
    );
}