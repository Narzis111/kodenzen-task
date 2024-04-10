import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Helmet } from 'react-helmet-async';


const UpdateProfileForm = () => {
    const { auth, updateProfile } = useAuth();
    const [displayName, setDisplayName] = useState(auth.currentUser.displayName || '');
    const [photoURL, setPhotoURL] = useState(auth.currentUser.photoURL || '');

    const handleSubmit = (e) => {
        e.preventDefault();

        updateProfile()
    };

    return (
        <>
            <Helmet>
                <title>Skyline | Update Profile</title>
            </Helmet>
            <form onSubmit={handleSubmit}>
                <label>
                    Display Name:
                    <input type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
                </label>
                <label>
                    Photo URL:
                    <input type="text" value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} />
                </label>
                <button type="submit">Update Profile</button>
            </form>
        </>
    );
};

export default UpdateProfileForm;

