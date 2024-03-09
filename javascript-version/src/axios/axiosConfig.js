import axios from 'axios';
const token = localStorage.getItem('token');
const headers = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json' // This can vary based on your API requirements
};

export const apiGet = (apiUrl) => {
    const response = axios.get(apiUrl, { headers })
    return response;
};

// Make a POST request with headers
export const apiPost = (apiUrl, postData) => {
    const response = axios.post(apiUrl, postData, { headers })
    return response;
}
