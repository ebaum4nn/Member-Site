import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

// Create an Axios instance to use throughout the service file
const apiInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Function to set the JWT token for all subsequent requests
export const setAuthToken = (token) => {
    if (token) {
        apiInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete apiInstance.defaults.headers.common['Authorization'];
    }
};

// Login function
export const login = async (credentials) => {
    try {
        const response = await apiInstance.post('/token/', credentials);
        if (response.data.access) {
            localStorage.setItem('token', response.data.access);
            setAuthToken(response.data.access);
        }
        return response.data;
    } catch (error) {
        console.error('Login failed:', error);
        throw error;
    }
};

// Fetch profile function
export const fetchProfile = async () => {
    try {
        const response = await apiInstance.get('/users/profile/');
        return response;  // Return the whole response to be handled in component
    } catch (error) {
        console.error('Error fetching profile:', error);
        throw error;
    }
};

// Logout function
export const logout = () => {
    localStorage.removeItem('token');
    setAuthToken(null);
};
