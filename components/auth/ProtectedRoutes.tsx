import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import LoginPage from './LoginPage';
import AdminLoginPage from './AdminLoginPage';
import DriverLoginPage from './DriverLoginPage';
import Home from '../home';

const ProtectedRoutes = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={!isAuthenticated ? <LoginPage /> : <Navigate to="/dashboard" />} />
      <Route path="/admin/login" element={!isAuthenticated ? <AdminLoginPage /> : <Navigate to="/admin/dashboard" />} />
      <Route path="/driver/login" element={!isAuthenticated ? <DriverLoginPage /> : <Navigate to="/driver/dashboard" />} />

      {/* Protected Routes */}
      <Route 
        path="/dashboard" 
        element={isAuthenticated ? <Home /> : <Navigate to="/login" />} 
      />
      
      {/* Redirect root to appropriate dashboard */}
      <Route 
        path="/" 
        element={
          isAuthenticated ? (
            <Navigate 
              to={
                user?.role === 'admin' 
                  ? '/admin/dashboard' 
                  : user?.role === 'driver' 
                    ? '/driver/dashboard' 
                    : '/dashboard'
              } 
            />
          ) : (
            <Navigate to="/login" />
          )
        } 
      />
    </Routes>
  );
};

export default ProtectedRoutes;