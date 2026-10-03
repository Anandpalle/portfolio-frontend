import axios from 'axios';

// Render cloud backend URL or local fallback
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://portfolio-backend-nanr.onrender.com/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000,
});

export const sendContactMessage = async (contactData) => {
  try {
    // Tries /contact endpoint first, falls back to /contacts if needed
    const res = await api.post('/contact', contactData);
    return res.data;
  } catch (err) {
    if (err.response && err.response.status === 404) {
      const fallbackRes = await api.post('/contacts', contactData);
      return fallbackRes.data;
    }
    throw err;
  }
};

export const checkHealth = async () => {
  try {
    const res = await api.get('/projects');
    return res.status === 200;
  } catch {
    return false;
  }
};

export default api;
