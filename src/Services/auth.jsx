const API_URL = "https://69536ae3a319a928023b6064.mockapi.io/AdminPanel";
export const Loginservice = async (credentials) => {
    try {
        const response = await fetch(API_URL)
        const data = await response.json();
        if(response.ok) return data
        throw new Error("Failed to fetch data")
    } catch (error) {
        console.log(error);
    }
}