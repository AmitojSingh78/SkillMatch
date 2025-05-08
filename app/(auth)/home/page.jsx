import React from 'react'
import 'remixicon/fonts/remixicon.css';
import { CheckCircle, FileText, Box, BarChart } from 'lucide-react';
const FeatureItem = ({ text }) => (
    <li className="flex items-start space-x-2 text-gray-700">
        <CheckCircle className="text-blue-500 w-5 h-5 mt-0.5" />
        <span>{text}</span>
    </li>
);
const Page = () => {
    return (
        <div className='container justify-center'>
            <nav className='flex items-center justify-between bg-white shadow-md p-4 sticky'>
                <h2 className='flex text-blue-500 font-bold text-2xl cursor-pointer'>SkillMatchAi</h2>
                <div className='flex items-center justify-center gap-4'>
                    <h4 className='cursor-pointer hover:text-blue-500'>Login</h4>
                    <button className='border rounded-lg bg-black text-white cursor-pointer w-25 h-10'>Sign-Up</button>
                </div>
            </nav>
            <div className='flex w-full h-screen'>
                <div className='flex flex-col p-5  mt-4 ml-4 h-[50%]'>
                    <h1 className='font-bold text-5xl'>Get Matched With Your <br /> Dream Job- <span className='font-bold text-5xl text-blue-500'>Instantly</span></h1>
                    <h4 className='text-gray-500 mt-3 font-bold'>Our AI-powered platform analyzes your resume, matches you with ideal jobs,<br /> and helps you bridge skill gaps to land your dream role.</h4>
                    <div className='flex mt-3 w-full gap-1 h-[50%]'>
                        <button className='flex items-center justify-center border rounded-sm bg-black text-white w-[30%] h-[60%]  cursor-pointer'>Upload Resume </button>
                        <button className='flex items-center justify-around border rounded-sm bg-white text-black w-[30%] h-[60%] cursor-pointer'><i className="ri-linkedin-box-line text-xl mr-3"></i>Sign-up with LinkedIn </button>
                    </div>
                    <ul className="space-y-1 mt-1">
                        <FeatureItem text="Instant resume analysis" />
                        <FeatureItem text="AI-powered job matching" />
                        <FeatureItem text="Personalized skill roadmaps" />
                    </ul>
                </div>
                <section className="w-full lg:w-1/2 flex justify-center mt-10">
                    <div className="w-200 h-130 bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-4xl text-gray-400"></span>
                    </div>
                </section>
            </div>
            <div className="bg-white text-gray-800 font-sans">
                <section className="py-16 px-4 text-center max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">How SkillMatchAI Works</h2>
                    <p className="text-gray-600 mb-12">
                        Our platform uses advanced AI to analyze your resume, match you with jobs, and help
                        you improve your skills.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
                            <div className="text-blue-600 text-4xl mb-4"><FileText className="w-8 h-8 text-blue-600" /></div>
                            <h3 className="text-xl font-semibold mb-2">Upload Your Resume</h3>
                            <p className="text-gray-600">
                                Upload your resume and our AI will analyze your skills, experience, and qualifications.
                            </p>
                        </div>
                        <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
                            <div className="text-blue-600 text-4xl mb-4"><Box className="w-8 h-8 text-blue-600" /></div>
                            <h3 className="text-xl font-semibold mb-2">Get Matched with Jobs</h3>
                            <p className="text-gray-600">
                                Our AI matches your profile with thousands of job listings to find your perfect fit.
                            </p>
                        </div>
                        <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
                            <div className="text-blue-600 text-4xl mb-4"><BarChart className="w-8 h-8 text-blue-600" /></div>
                            <h3 className="text-xl font-semibold mb-2">Bridge Skill Gaps</h3>
                            <p className="text-gray-600">
                                Identify skill gaps and get personalized learning recommendations to improve your chances.
                            </p>
                        </div>
                    </div>
                </section>
                <footer className="bg-gray-100 py-10 px-4 text-sm text-gray-600">
                    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <h4 className="font-bold text-blue-800 mb-2">SkillMatchAI</h4>
                            <p>
                                AI-powered resume analyzer and job matcher to help you land your dream job.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-800 mb-2">PRODUCT</h4>
                            <ul className="space-y-1">
                                <li>Features</li>
                                <li>Pricing</li>
                                <li>Testimonials</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-800 mb-2">COMPANY</h4>
                            <ul className="space-y-1">
                                <li>About</li>
                                <li>Blog</li>
                                <li>Careers</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-800 mb-2">LEGAL</h4>
                            <ul className="space-y-1">
                                <li>Privacy Policy</li>
                                <li>Terms of Service</li>
                                <li>Cookie Policy</li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center text-gray-400 mt-8">© 2025 SkillMatchAI. All rights reserved.</div>
                </footer>
            </div>
        </div>

    )
}

export default Page