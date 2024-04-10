
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Helmet } from "react-helmet-async";


const Register = () => {

  
  const { createUser, updateUserProfile } = useAuth();
  const { showPassword, setShowPassword } = useState(false);
  const { register, handleSubmit, formState: { errors }, } = useForm();

  // navigation systems
  const navigate = useNavigate();
  const from = "/";

  const onSubmit = (data) => {
    const { email, password, image, fullName } = data;


    // Password verification
    if (!/(?=.*[a-z])/.test(password) || !/(?=.*[A-Z])/.test(password) || password.length < 6) {
      toast.error('Password must contain at least 6 characters including at least one uppercase letter and one lowercase letter');
      return;
    }

    //create user and update profile
    createUser(email, password)
      .then(() => {
        updateUserProfile(fullName, image)
          .then(() => {
            toast.success('Registration successful');
            navigate(from);
          });
      });
  };

  return (
    <>
       <Helmet>
                <title>Skyline | Register</title>
             </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img className='w-full h-full object-cover' src="https://i.ibb.co/MPfHnXp/joel-filipe-j-U9-VAZDGMzs-unsplash.jpg" alt="" />

          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Full name"
                  className="input input-bordered"
                  {...register("fullName", { required: true })}
                />
                {errors.fullName && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image Url</span>
                </label>
                <input
                  type="text"
                  placeholder="image url"
                  className="input input-bordered"
                  {...register("image")}
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
                <span className="absolute text-slate-500 top-14 right-6" 
                onClick={ () => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
                
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control mt-6 p-0">
                <button className="btn btn-neutral">Register</button>
              </div>
              <label className="label">
                Have an account?{" "}
                <Link to="/login" className="label-text-alt link link-hover">
                  Please Login
                </Link>
              </label>
              <SocialLogin></SocialLogin>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;