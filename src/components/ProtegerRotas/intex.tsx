import { Navigate, Outlet } from 'react-router-dom';

export function ProtegerRotas() {
    const isAuthenticated = !!localStorage.getItem('authToken');

    return isAuthenticated ? <Outlet /> : <Navigate to={'/'} />;
}   