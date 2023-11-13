
const baseUrl = "http://localhost:8090"


interface IService {
    name: string;
    information: string;
    price: number;
    category: number;
}

interface IServicePost {
    name: string;
    information: string;
    price: number;
    category: { id: number };
    user: { id: number };
}
export const registerService = async (serviceForm: IService): Promise<any> => {

    const bodyLoco: IServicePost = {
        name: serviceForm.name,
        information: serviceForm.information,
        price: serviceForm.price,
        category: {
            id: serviceForm.category
        },
        user: {
            id: 5
        }
    }

    const response = await fetch(`${baseUrl}/activity`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        method: 'POST',
        body: JSON.stringify(bodyLoco)

    });
    return await response.json();
}


export const getCategories = async (): Promise<any> => {

    const response = await fetch(`${baseUrl}/category`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        method: 'GET'

    });
    return await response.json();
}
