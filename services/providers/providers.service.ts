
const baseUrl = "http://localhost:8090/activity"

export const getAllProviders = async (): Promise<any> => {

    const response = await fetch(`${baseUrl}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        }
    });
    return await response.json();
}