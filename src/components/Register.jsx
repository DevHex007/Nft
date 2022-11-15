import React, { useState } from 'react'
import { useSignup } from "../hooks/useSignup"

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup, error, isLoading} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()
    
        await signup(email, password)
      }

    return(
           <div className='flex flex-col h-screen justify-center'>
            <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8' onSubmit={handleSubmit}>
                <h2 className='text-3xl text-white font-bold text-center'>REGISTER NEW USER</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Email</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' 
                        type="email" 
                    />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Password</label>
                    <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' 
                        type="password" 
                    />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Confirm Password</label>
                    <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Referral ID</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-[#990099]-500 focus:bg-gray-800 focus:outline-none' type="text" />
                </div>
                
                <button disabled={isLoading} className='w-full my-5 py-2 bg-[#990099] shadow-lg shadow-[#990099]/50 hover:shadow-[#990099]/40 text-white font-semibold rounded-lg'>REGISTER</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    )
}



export default Register;
