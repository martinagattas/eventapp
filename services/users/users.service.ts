import { UserType } from "types/users/UserType";

const baseUrl = 'https://virtserver.swaggerhub.com/BXPLAYER10/Proyecto-Final-Integrador/1.0.0';

export const createUser = async (data: UserType): Promise<any> => {
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