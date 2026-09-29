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

export const getProjects = async () => {
  try {
    const res = await api.get('/projects');
    return res.data;
  } catch (err) {
    console.warn('Backend /projects fetch fallback:', err.message);
    return null;
  }
};

export const getSkills = async () => {
  try {
    const res = await api.get('/skills');
    return res.data;
  } catch (err) {
    console.warn('Backend /skills fetch fallback:', err.message);
    return null;
  }
};

export const sendContactMessage = async (contactData) => {
  const res = await api.post('/contacts', contactData);
  return res.data;
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
