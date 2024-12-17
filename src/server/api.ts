export const fetchData = async (endpoint: string) => {
    const queryString = `${import.meta.env.VITE_API_URL}api/${endpoint}`
    const response = await fetch(queryString, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_BARIER_TOKEN}`, // Add your Bearer token here
            'Content-Type': 'application/json'
        }
    });
    return response
}