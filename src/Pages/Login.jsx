import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useState } from 'react';
import Swal from 'sweetalert2';
import SocialLogin from '../Components/SocialLogin';


const Login = () => {

    const { signInUser } = useAuth()
    const [error, setError] = useState()
    const navigate = useNavigate()
    const location = useLocation()    

    const from = location?.state?.from?.pathname || '/'
    console.log(location?.state);

  
    


    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        console.log(data)

        signInUser(data.email, data.password)
            .then(res => {
                console.log(res.user);
                if (res.user) {
                    reset()
                    toast.success('Successfully logged in')
                    navigate(from)

                }
            })
            .catch(err => {
                console.log(err.message);
                setError(err.message)
            })

        setTimeout(function () {
            setError('')
        }, 3000);




    }

    return (
        <div>
            <section className="" style={{ backgroundImage: 'url("https://i.ibb.co/G3mX7SB/bannerbg.jpg")', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <div className="flex bg-black bg-opacity-50 flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-teal-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6" action="#">

                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" {...register("email",)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your email" required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" {...register("password",)} placeholder="Password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <button type="submit" className="w-full text-white bg-teal-500 hover:bg-teal-600  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign In</button>
                                {
                                    error && <p className='text-red-600'> {error}</p>
                                }
                                <p className="text-sm dark:font-light  text-gray-200">
                                    Don&#39;t have an account? <Link to='/signup' className="font-medium text-white underline hover:underline ">Register here</Link>
                                </p>
                            </form>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;