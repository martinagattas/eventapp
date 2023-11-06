import React, { FC, PropsWithChildren } from "react";
import { Container, Stack } from "@mui/material";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface Props extends PropsWithChildren{
    variant: 'general' | 'auth'
}

export const Layout: FC<Props> = ({ children, variant }: Props) => {
    return (
        <Stack>
            {variant === 'general' && <Navbar />}
            <Container className={variant === 'general' ? 'generalContainer' : 'authContainer'}>
                {children}
            </Container>
            {/* {variant === 'general' && <Footer />} */}
        </Stack>
    );
}