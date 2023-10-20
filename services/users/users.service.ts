import { UserType } from "types/users/UserType";

export const createUser = async (data: UserType): Promise<any> => {
    const userData = JSON.stringify(data);
    const response = await fetch(`/api/register`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        method: "POST",
        body: userData,
    });

    return await response.json();
}