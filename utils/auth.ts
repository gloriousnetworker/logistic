import { NextRouter } from 'next/router';

export const isAuthenticated = (): boolean => {
  if (typeof window === 'undefined') {
    return false;
  }
  
  const token = localStorage.getItem('authToken');
  return !!token;
};

export const getAuthToken = (): string | null => {
  if (typeof window === 'undefined') {
    return null;
  }
  
  return localStorage.getItem('authToken');
};

export const logout = (router: NextRouter): void => {
  localStorage.removeItem('authToken');
  router.push('/login');
};

// Custom hook to protect client-side routes
export const useProtectedRoute = (router: NextRouter): void => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('authToken');
    if (!token) {
      router.replace('/login');
    }
  }
};