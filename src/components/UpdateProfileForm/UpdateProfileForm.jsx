import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const UpdateProfileForm = () => {
    const { updateUserProfile, user, setReload } = useAuth();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    useEffect(() => {
        if (user) {
            setValue('displayName', user.displayName || '');
            setValue('photoURL', user.photoURL || '');
        }
    }, [user, setReload, setValue]);

    const onSubmit = (data) => {
        const { displayName, photoURL } = data;

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

            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/Z2TRjDT/360-F-559095057-Yei-S6z-TM107w-Rlnenm-ZZ8zt-Dj-Om-G8858.jpg)' }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="w-full">
                        <h3 className='text-2xl text-black font-bold my-10 text-center'>Update User Profile</h3>
                        <form onSubmit={handleSubmit(onSubmit)}
                            className="bg-blue-950 mx-auto shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[500px]">
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
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.photoURL ? 'border-red-500' : ''
                                        }`}
                                    type="text"
                                    {...register('photoURL', {
                                        required: 'Photo URL is required',
                                        pattern: {
                                            value: /^(https?):\/\/.*\.(jpeg|jpg|gif|png|svg)$/i,
                                            message: 'Invalid URL',
                                        },
                                    })}
                                />
                                {errors.photoURL && (
                                    <p className="text-red-500 text-xs italic">{errors.photoURL.message}</p>
                                )}
                            </div>
                            <button type="submit" className='text-white py-3 text-center items-center px-4 rounded-full bg-orange-500'>Update Profile</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateProfileForm;
