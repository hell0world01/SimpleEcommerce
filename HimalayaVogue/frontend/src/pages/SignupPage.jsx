import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";

const Signup = () => {
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [visible, setVisible] = useState(false);
    const [avatar, setAvatar] = useState(null);

    const handleSubmit = () => {
        console.log("working");
    }

    const handleFileInput = (e) => {
        const file = e.target.files[0];
        setAvatar(file);
    }
	return (
		<div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
					Register as new User
				</h2>
			</div>
			<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
				<div className="bg-white py-8 shadow sm:rounded-lg sm:px-10">
					<form className="space-y-6">
						<div>
							<label htmlFor="fullname" className="text-sm font-medium text-gray-700">
								Fullname
							</label>
							<div className="mt-1">
								<input
									type="text"
									name="fullname"
									value={name}
									onChange={(e) => setName(e.target.value)}
									required
									className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
								/>
							</div>
						</div>
						<div>
							<label htmlFor="email" className="text-sm font-medium text-gray-700">
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
									type={visible ? "text" : "password"}
									name="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required
									className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
								/>
								{visible ? (
									<AiOutlineEye
										className="absolute right-2 top-2 cursor-pointer"
										size={25}
										onClick={() => setVisible(false)}
									/>
								) : (
									<AiOutlineEyeInvisible
										className="absolute right-2 top-2 cursor-pointer"
										size={25}
										onClick={() => setVisible(true)}
									/>
								)}
							</div>
						</div>
						<div>
                            {/* <div className="mt-2 flex items-center">
                                <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                                    {
                                        avatar ? (<img src={URL.createObjectURL(avatar)}/>)
                                        : (
                                            <RxAvatar className="h-8 w-8"/>
                                        )
                                    }
                                </span>
                                <label htmlFor="file-input"
                                className="ml-5 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-200"
                                >
                                    Upload a file
                                    <input type="file" 
                                    name="avatar"
                                    id="file-input"
                                    accept=".jpg, .jpeg, .png"
                                    onChange={handleFileInput}
                                    className="sr-only"/>
                                </label>
                            </div> */}
						</div>
						<button
							type="submit"
							className="group relative w-full h-[40px] py-2 px4 border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500">
							Submit
						</button>
						<div className="flex items-center">
							<h4>Already have any account?</h4>
							<Link to="/login" className="text-blue-600 pl-2">
								Login
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;
