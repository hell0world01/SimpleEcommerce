import React, { useContext, useState } from "react";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/Context";

const PlaceOrder = () => {
    const [method, setMethod] = useState("COD");
    const {navigate} = useContext(ShopContext);
	return (
		<div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
			{/**Left side */}
			<div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
				<div className="text-xl sm:text-2xl my-3">
					<p>DELIVERY INFORMATION</p>
				</div>

				<div className="flex gap-3">
					<input
						className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
						type="text"
						placeholder="First name"
					/>
					<input
						className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
						type="text"
						placeholder="Last name"
					/>
				</div>
				<input
					className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
					type="email"
					placeholder="Email address"
				/>
				<input
					className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
					type="text"
					placeholder="Street"
				/>
				<div className="flex gap-3">
					<input
						className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
						type="text"
						placeholder="City"
					/>
					<input
						className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
						type="text"
						placeholder="State"
					/>
				</div>
				<div className="flex gap-3">
					<input
						className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
						type="number"
						placeholder="Zipcode"
					/>
					<input
						className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
						type="text"
						placeholder="Country"
					/>
				</div>
				<input
					className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
					type="number"
					placeholder="Phone"
				/>
			</div>

			{/** Right side */}
			<div className="mt-8">
				<div className="mt-8 min-w-80">
					<CartTotal />
				</div>
				<div className="mt-12">
					<p>PAYMENT METHOD</p>
                    <div className="flex gap-3 flex-col lg:flex-row">
                        <div onClick={() => setMethod("khalti")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "khalti" ? "bg-emerald-600" : ""}`}>
                            </p>
                            <img className="w-24" src={assets.khalti_logo} alt="" />
                        </div>
                        <div onClick={() => setMethod("esewa")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "esewa" ? "bg-emerald-600" : ""}`}>
                            </p>
                            <img className="w-24" src={assets.esewa_logo} alt="" />
                        </div>
                        <div onClick={() => setMethod("COD")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "COD" ? "bg-emerald-600" : ""}`}>
                            </p>
                            <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
                        </div>
                    </div>

                    <div className="w-full text-end mt-8">
                        <button onClick={() => navigate("/orders")} className="bg-black text-white px-16 py-3 text-sm">PLACE ORDER</button>
                    </div>
				</div>
			</div>
		</div>
	);
};

export default PlaceOrder;
