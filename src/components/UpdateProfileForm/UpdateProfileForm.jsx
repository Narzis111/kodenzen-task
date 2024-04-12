import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const UpdateProfileForm = () => {
    const { updateUserProfile, user } = useAuth();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    // Set initial values for displayName and photoURL from user context
    useEffect(() => {
        if (user) {
            setValue('displayName', user.displayName || '');
            setValue('photoURL', user.photoURL || '');
        }
    }, [user, setValue]);

    const onSubmit = (data) => {
        const { displayName, photoURL } = data;

        // Update user profile
        updateUserProfile(displayName, photoURL)
            .then(() => {
                alert('Profile updated successfully!');
            }).catch((error) => {
                console.error('Error updating profile:', error);
                alert('An error occurred while updating your profile. Please try again.');
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

UpdateProfileForm.propTypes = {
  errors: PropTypes.object,
  }

