
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import PropTypes from 'prop-types';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();


    if (loading) {
        return <span className="loading loading-ball loading-lg"></span>
    }
    if (!user) { 
        
        return <Navigate to="/login" state={location.pathname}></Navigate>
    }


    return children;
    
};

export default PrivateRoutes;
PrivateRoutes.propTypes = {
    children: PropTypes.node,
    }
