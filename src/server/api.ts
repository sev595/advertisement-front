export const fetchData = async (endpoint: string) => {
    const queryString = `${import.meta.env.VITE_API_URL}api/${endpoint}`;
    const response = await fetch(queryString, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_BARIER_TOKEN}`, // Bearer token for authentication
            'Content-Type': 'application/json', // Ensures the server understands JSON
            'Accept': 'application/json', // Specifies the response format expected
            'X-Requested-With': 'XMLHttpRequest' // Sometimes required for CSRF protection
        }
    });

    // Handle errors or unexpected response
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json(); // Parse the response as JSON
};
