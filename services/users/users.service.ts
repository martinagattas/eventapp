import { LoginType, RegisterType } from "types/users/UserType";

const baseUrl = 'https://virtserver.swaggerhub.com/BXPLAYER10/Proyecto-Final-Integrador/1.0.0';

// fixMe: falta cambiar el endpoint para el login y agregar los mensajes de users.error dependiendo del código que recibo del back

export const loginUser = async (data: LoginType): Promise<any> => {
    const userData = JSON.stringify(data);
    const response = await fetch(`${baseUrl}/users`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        method: "POST",
        body: userData,
    });

    localStorage.setItem('loginUser', userData);
    return await response.json();
}

export const logOut = async () => {
    localStorage.removeItem('loginUser');
}

export const createUser = async (data: RegisterType): Promise<any> => {
    const userData = JSON.stringify(data);
    const response = await fetch(`${baseUrl}/users`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        method: "POST",
        body: userData,
    });

    return await response.json();
}