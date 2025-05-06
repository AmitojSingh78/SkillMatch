"use client";
import React from 'react';
import 'remixicon/fonts/remixicon.css';

const page = () => {
    return (
        <div className='min-h-screen w-full flex items-center justify-center bg-gray-200 px-4 py-6'>
            <div className='flex flex-col items-center bg-white w-full max-w-md md:max-w-lg rounded-lg shadow-lg p-6 md:p-10 border border-gray-300'>
                <h1 className='text-2xl font-bold'>Login Account</h1>
                <h3 className='text-gray-600 text-center mt-1'>Enter your information to log in to your account</h3>

                <button className='flex hover:bg-black hover:text-white items-center justify-center rounded-sm border cursor-pointer border-gray-400 px-4 py-2 mt-4 w-full font-medium'>
                    <i className="ri-linkedin-box-line text-xl mr-3"></i>Sign-In with LinkedIn
                </button>

                <div className='flex justify-start w-full mt-4'>
                    <h4 className='text-gray-600 text-sm'><span onClick={()=>window.location.href='/register'} className='text-blue-500 text-md cursor-pointer'>Already a User? </span>or Continue with</h4>
                </div>

                <div className='mt-2 w-full'>
                    <h3 className='font-bold text-sm'>Email</h3>
                    <input type="text" className='mt-2 border border-gray-400 rounded-sm px-2 py-1 w-full h-10' placeholder='name@example.com' />
                </div>

                <div className='mt-2 w-full'>
                    <h3 className='font-bold text-sm'>Password</h3>
                    <input type="password" className='mt-2 border border-gray-400 rounded-sm px-2 py-1 w-full h-10' placeholder='Password' />
                    <h4 className='text-gray-600 text-sm mt-1'>Password must be at least 8 characters long and include a number and a special character.</h4>
                </div>

                <button className='border rounded-sm bg-black text-white w-full h-10 p-2 mt-4 cursor-pointer'>Login</button>
            </div>
        </div>
    );
}

export default page;
