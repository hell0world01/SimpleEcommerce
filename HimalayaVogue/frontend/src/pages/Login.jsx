import React, { useState } from "react";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = () => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [visible, setVisible] = useState(false);
	return (
		<div className="min-h-screen bg-gray-50 px-4 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
			<div className=" sm:mx-auto sm:w-full sm:max-w-md">
				<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
					Login to your account
				</h2>
			</div>
			<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
				<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
					<form className="space-y-6">
						<div>
							<label
								htmlFor="email"
								className="text-sm font-medium text-gray-700">
								Email
							</label>
							<div className="mt-1">
								<input
									type="email"
									name="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
									className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
								/>
							</div>
						</div>
						<div>
							<label
								htmlFor="password"
								className="block text-sm font-medium text-gray-700">
								Password
							</label>
							<div className="mt-1 relative">
								<input
									type={visible ? "text": "password"}
									name="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required
									className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
								/>
								{ visible ? (<AiOutlineEye 
								className="absolute right-2 top-2 cursor-pointer"
								size={25}
								onClick={() => setVisible(false)}
								/>) : (<AiOutlineEyeInvisible
									className="absolute right-2 top-2 cursor-pointer"
									size={25}
									onClick={() => setVisible(true)}
								/>)}
							</div>
						</div>
						<div className="flex items-center justify-between">
							<div className="flex items-center">
								<input type="checkbox" name="remember-me" id="remember-me" className="h-4 w-4"/>
								<label htmlFor="remember-me" className="ml-2 text-sm text-gray-900">Remember me</label>
							</div>
							<div className="text-sm">
								<a href="#" className="font-medium text-blue-600 hover:text-blue-400">Forgot you password?</a>
							</div>
						</div>
						<button type="submit" className="group relative w-full h-[40px] py-2 px4 border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500">
							Submit
						</button>
						<div className="flex items-center">
							<h4>Not have any account</h4>
							<Link to="/sign-up" className="text-blue-600 pl-2">
							Signup
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
