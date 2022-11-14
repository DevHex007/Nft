import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => (
    
            <div className='flex flex-col  h-screen  justify-center'>
                <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'>
                    <h2 className='text-4xl text-white font-bold text-center'>LOGIN</h2>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Email</label>
                        <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                    </div>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Password</label>
                        <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" />
                    </div>
                    <div className='flex justify-between text-gray-400 py-2'>
                        <p className='flex items-center shadow-teal-500/50 hover:shadow-teal-500/40'><Link to={`/Register`}><a href="">Register New User</a></Link></p>
                        <p><a className='shadow-teal-500/50 hover:shadow-teal-500/40' href=""><Link to="#">Forgot Password ?</Link></a></p>
                    </div>
                    <button className='w-full my-5 py-2 bg-[#990099] shadow-lg shadow-[#990099]/50 hover:shadow-[#990099]/40 text-white font-semibold rounded-lg'>LOGIN</button>
                    
                </form>
            </div>
   )



export default Login;
