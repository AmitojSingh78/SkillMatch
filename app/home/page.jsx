import React from "react";
import "remixicon/fonts/remixicon.css";
const Page = () => {
	return (
		<div className="container">
			<nav className="flex items-center justify-between bg-white shadow-md p-4 sticky">
				<h2 className="flex text-blue-500 font-bold text-2xl cursor-pointer">
					SkillMatchAi
				</h2>
				<div className="flex items-center justify-center gap-4">
					<h4 className="cursor-pointer hover:text-blue-500">
						Login
					</h4>
					<button className="border rounded-lg bg-black text-white cursor-pointer w-25 h-10">
						Sign-Up
					</button>
				</div>
			</nav>
			<div className="flex w-full h-screen">
				<div className="flex flex-col p-5  mt-4 ml-4 h-[80%]">
					<h1 className="font-bold text-5xl">
						Get Matched With Your <br /> Dream Job-{" "}
						<span className="font-bold text-5xl text-blue-500">
							Instantly
						</span>
					</h1>
					<h4 className="text-gray-500 mt-3 font-bold">
						Our AI-powered platform analyzes your resume, matches
						you with ideal jobs,
						<br /> and helps you bridge skill gaps to land your
						dream role.
					</h4>
					<div className="flex mt-3 w-full gap-1 h-[50%]">
						<button className="flex items-center justify-center border rounded-sm bg-black text-white w-[30%] h-[15%]  cursor-pointer">
							Upload Resume{" "}
						</button>
						<button className="flex items-center justify-around border rounded-sm bg-white text-black w-[30%] h-[15%] cursor-pointer">
							<i className="ri-linkedin-box-line text-xl mr-3"></i>
							Sign-up with LinkedIn{" "}
						</button>
					</div>
				</div>
				<div> // div for image</div>
			</div>
		</div>
	);
};

export default Page;
