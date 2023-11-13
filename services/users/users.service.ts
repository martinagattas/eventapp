import { LoginType, RegisterType } from "types/users/UserType";


const baseUrl = "http://localhost:8090/auth"

// fixMe: falta cambiar el endpoint para el login y agregar los mensajes de users.error dependiendo del código que recibo del back

export const loginUser = async (data: LoginType): Promise<any> => {
    const userData = JSON.stringify(data);
    const response = await fetch(`${baseUrl}/login`, {
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
    data['username'] = data['email'];
    data['type'] = 'USER';
    const userData = JSON.stringify(data);
    console.log(userData)

    const response = await fetch(`${baseUrl}/register`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        method: "POST",
        body: userData,
    });

    return await response.json();
}