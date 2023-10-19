import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Container, Box, Button, Link } from "@mui/material";
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';

const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loginError, setLoginError] = useState('');

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        if (!email.includes('@' && '.com')) {
            setError('Por favor, ingresá un mail válido.');
            } else {
                setError('');
        }

        if (password.length < 8) {
            setPasswordError('La contraseña debe contener al menos 8 caracteres.');
            } else {
                setPasswordError('');
        }

        // simulo las credenciales

        if (email !== 'correct@email.com' || password !== '12345678') {
            setLoginError('Credenciales inválidas');
            } else {
                setLoginError(''); 
        }

    }


    return (
        <>
            <Container style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", backgroundColor: "rgba(191, 195, 199)", width:"100%", height: "100%", overflow: "hidden"}}>
                <Box style={{backgroundColor: "rgba(228, 232, 237)", width:"50%", height: "80%", marginBlock: "10%", borderRadius: "0.5rem"}}>
                   
                    <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginBlock: "5%"}}>

                    <div style={{ minHeight: '4rem', width: "40%", }}>
                        {loginError && <Alert variant="outlined" severity="error">Credenciales inválidas</Alert>}
                    </div>

                        <TextField id="outlined-basic-mail" label="Mail" variant="outlined" onChange={handleEmailChange} error={error !== ''} helperText={error} style={{marginBlock: "5%", width: "80%"}} />
                        
                        <TextField id="outlined-password-input" type="password" label="Contraseña" variant="outlined" onChange={handlePasswordChange} error={passwordError !== ''} helperText={passwordError} style={{marginBlock: "5%", width: "80%"}} />

                        <Button type= "submit" variant="contained" style={{backgroundColor: "rgba(98, 189, 154)", color: "white", width: "50%", margin: "5%", height: "3rem", borderRadius: "0.5rem"}}>Iniciar Sesión</Button>

                        <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", margin: "1%", width: "60%", marginBottom: "4rem"}}>
                            <Link variant="body2" style={{color: "blue"}} href="">Olvidé mi contraseña</Link>
                            <Link variant="body2"  style={{color: "blue"}} href="">Registrarme</Link>
                        </div>

                    </form>

                </Box>
            </Container>
        </>
    )
} 

export default LoginForm;
