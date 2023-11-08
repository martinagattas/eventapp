import React, { FC } from "react";
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import { Box, List, ListItem, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import Image from 'next/image';

export const Footer:FC = () => {
    return (
        <footer>
            <Box display={'flex'} alignItems={'center'} gap={1}>
                <Image src="/iso_positive.png" alt="Eventify" width={30} height={30}/>
                <Typography className="logo">EVENTIFY</Typography>
            </Box>
            <List>
                <ListItem disablePadding>
                    <Link href="/" underline="none" className="whiteLink"><LinkedIn/></Link>
                </ListItem>
                <ListItem disablePadding>
                    <Link href="/" underline="none" className="whiteLink"><Instagram/></Link>
                </ListItem>
                <ListItem disablePadding>
                    <Link href="/" underline="none" className="whiteLink"><Facebook/></Link>
                </ListItem>
                <ListItem disablePadding>
                    <Link href="/" underline="none" className="whiteLink"><Twitter/></Link>
                </ListItem>
            </List>
        </footer>
    );
}