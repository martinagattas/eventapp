import React from "react";
import { Container, Box, Button, Link } from "@mui/material";



const LoginHeader = () => {
    
    return (
        <div style={{display:"flex", flexDirection: "row", width: "50%", alignItems: "center", justifyContent: "flex-end", columnGap: "1rem", marginRight: "2rem"}}>
            <Button variant="contained" style={{backgroundColor: "rgba(186, 232, 218)", color: "black"}}>Registrarse</Button> 
            <Button variant="contained" style={{backgroundColor: "rgba(186, 232, 218)", color: "black"}}>Iniciar sesión</Button> 
        </div>
    )
}


const HeaderLeft = () => {
    return (
        <div style={{display: "flex", width: "50%", padding: "1rem"}}>
            <img src="../../DigitalHouse_Logo_Black.png"></img>
        </div>
    )
}


const Navbar = () => { 
    return (
        <header style={{display:"flex", flexDirection: "row", justifyContent: "space-between", backgroundColor: "rgba(64, 173, 141)", height: "7rem"}}>
            <HeaderLeft/>
            <LoginHeader/>
        </header>
    )
}
export default Navbar;