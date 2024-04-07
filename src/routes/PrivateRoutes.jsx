
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoutes = ({ children }) => {
    const { user ,loading} = useAuth();
    const location = useLocation();


    if (loading) {
        return <h1 className="text-4xl">Loading</h1>
    }

    if (!user) {
        return <Navigate to='/login' state={location?.pathname || '/'} />
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoutes;
