import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateProfileForm = () => {
    const { updateUserProfile, user, setReload } = useAuth();
    const { register, handleSubmit, setValue } = useForm();

    // Set initial values for displayName and photoURL from user context
    useEffect(() => {
        if (user) {
            setValue('displayName', user.displayName || '');
            setValue('photoURL', user.photoURL || '');
        }
    }, [user, setReload, setValue]);

    const onSubmit = (data) => {
        const { displayName, photoURL, image } = data;

        const urlPattern = /^(https?):\/\/.*$/i;
        if (!urlPattern.test(image)) {
          toast.error('Please provide a valid image URL');
          return;
        }

        // Update user profile
        
        updateUserProfile(displayName, photoURL)
            .then(() => {
              setReload(true),
              toast.success('Profile updated successfully!');
               
            }).catch((error) => {
                console.error('Error updating profile:', error);
                toast.error('An error occurred Please try again.');
            });
    };

    return (
<>
<Helmet>
    <title>SR | update profile</title>
</Helmet>
<h3 className='text-2xl font-bold my-10 text-center'>Update User Profile</h3>
<form onSubmit={handleSubmit(onSubmit)}
        className="bg-blue-950 mx-auto shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2">
      <div className="mb-4">
        <label className="block text-white text-sm font-bold mb-2">
        Display Name:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          
          type="text"
          {...register('displayName')}
        />
      </div>
      <div className="mb-4">
        <label className="block text-white text-sm font-bold mb-2">
        Photo URL:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          
          type="text"
          {...register('photoURL')}
        />
      </div>
      <button type="submit" className='text-blue-950 text-center items-center px-4 rounded-full bg-yellow-500'>Update Profile</button>
        </form>
</>
   );
};

export default UpdateProfileForm;


