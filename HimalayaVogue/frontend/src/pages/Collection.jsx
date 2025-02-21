import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { ShopContext } from "../context/Context";
import { assets } from "../assets/assets";
import ProductItem from "../components/ProductItem";

const Collection = () => {
	const { products, search, showSearch } = useContext(ShopContext);
	const [showFilter, setShowFilter] = useState(false);
	const [filterProducts, setFilterProducts] = useState([]);
	const [category, setCategory] = useState([]);
	const [clothType, setClothType] = useState([]);
	const [brand, setBrand] = useState([]);
	const [sortType, setSortType] = useState([]);

	const handleToggle = (e) => {
		if (category.includes(e.target.value)) {
			setCategory((prev) => prev.filter((item) => item !== e.target.value));
		} else {
			setCategory((prev) => [...prev, e.target.value]);
		}
	};

	const subCategoryToggle = (e) => {
		if (clothType.includes(e.target.value)) {
			setClothType((prev) => prev.filter((item) => item !== e.target.value));
		} else {
			setClothType((prev) => [...prev, e.target.value]);
		}
	};

	const brandCategoryToggle = (e) => {
		if (brand.includes(e.target.value)) {
			setBrand((prev) => prev.filter((item) => item !== e.target.value));
		} else {
			setBrand((prev) => [...prev, e.target.value]);
		}
	};

	const applyFilter = () => {
		let productsCopy = products.slice();

		if(showSearch && search) {
			productsCopy = productsCopy.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
		}
		if (category.length > 0) {
			productsCopy = productsCopy.filter((item) => category.includes(item.category));
		}
		if (clothType.length > 0) {
			productsCopy = productsCopy.filter((item) => clothType.includes(item.subCategory));
		}
		setFilterProducts(productsCopy);
	};

	const sortProduct = () => {
		let productsCopy = products.slice();
		switch (sortType) {
			case "low-high":
				setFilterProducts(productsCopy.sort( (a,b) => (a.price - b.price))) 
				break;
			case "high-low":
				setFilterProducts(productsCopy.sort( (a,b) => (b.price - a.price)))
				break;
			default:
				applyFilter();
				break;
		}
	}

	useEffect(() => {
		applyFilter();
	}, [category, clothType, brand, search]);

	useEffect(() => {
		sortProduct();
	}, [sortType]);
	return (
		<div>
			<div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
				{/* Filter Options*/}
				<div className="min-w-60">
					<p
						onClick={() => setShowFilter(!showFilter)}
						className="my-2 text-xl flex items-center cursor-pointer gap-2">
						FILTERS{" "}
						<img
							className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
							src={assets.dropdown_icon}
							alt=""
						/>
					</p>
					<div
						className={`border border-gray-300 pl-5 py-3 mt-6 ${
							showFilter ? "" : "hidden"
						} sm:block`}>
						<p className="mb-3 text-sm font-medium">CATEGORIES</p>
						<div className="flex flex-col gap-2 text-sm font-light text-gray-700">
							<div className="flex gap-2">
								<input
									type="checkbox"
									id="men"
									value={"Men"}
									onChange={handleToggle}
								/>
								<label htmlFor="men">Men</label>
							</div>
							<div className="flex gap-2">
								<input
									type="checkbox"
									id="women"
									value={"Women"}
									onChange={handleToggle}
								/>
								<label htmlFor="women">Women</label>
							</div>
							<div className="flex gap-2">
								<input
									type="checkbox"
									id="kids"
									value={"Kids"}
									onChange={handleToggle}
								/>
								<label htmlFor="kids">Kids</label>
							</div>
						</div>
					</div>
					<div
						className={`border border-gray-300 pl-5 py-3 mt-6 ${
							showFilter ? "" : "hidden"
						} sm:block`}>
						<p className="mb-3 text-sm font-medium">TYPE</p>
						<div className="flex flex-col gap-2 text-sm font-light text-gray-700">
							<div className="flex gap-2">
								<input
									type="checkbox"
									id="topwear"
									value={"Topwear"}
									onChange={subCategoryToggle}
								/>
								<label htmlFor="topwear">Topwear</label>
							</div>
							<div className="flex gap-2">
								<input
									type="checkbox"
									id="bottomwear"
									value={"Bottomwear"}
									onChange={subCategoryToggle}
								/>
								<label htmlFor="bottomwear">Bottomwear</label>
							</div>
							<div className="flex gap-2">
								<input
									type="checkbox"
									id="winterwear"
									value={"Winterwear"}
									onChange={subCategoryToggle}
								/>
								<label htmlFor="winterwear">Winterwear</label>
							</div>
						</div>
					</div>
					<div
						className={`border border-gray-300 pl-5 py-3 mt-6 ${
							showFilter ? "" : "hidden"
						} sm:block`}>
						<p className="mb-3 text-sm font-medium">BRAND</p>
						<div className="flex flex-col gap-2 text-sm font-light text-gray-700">
							<div className="flex gap-2">
								<input
									type="checkbox"
									id="huba"
									value={"HUBA"}
									onChange={brandCategoryToggle}
								/>
								<label htmlFor="huba">HUBA</label>
							</div>
							<div className="flex gap-2">
								<input
									type="checkbox"
									id="caliber"
									value={"Caliber"}
									onChange={brandCategoryToggle}
								/>
								<label htmlFor="caliber">Caliber</label>
							</div>
							<div className="flex gap-2">
								<input
									type="checkbox"
									id="goldstar"
									value={"Goldstar"}
									onChange={brandCategoryToggle}
								/>
								<label htmlFor="goldstar">Goldstar</label>
							</div>
						</div>
					</div>
				</div>
				<div className="flex-1">
					<div className="flex justify-between text-base sm:text-2xl mb-4">
						<h3>COLLECTIONS</h3>
						<select onChange={(e) => setSortType(e.target.value)} className="border-2 border-gray-300 text-sm px-2" name="" id="">
							<option value="relavent"> Sort by: Relavent</option>
							<option value="low-high"> Sort by: Low to High</option>
							<option value="high-low"> Sort by: High to Low</option>
						</select>
					</div>
					{/* Products*/}
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
						{filterProducts.map((value, index) => (
							<ProductItem
								key={index}
								name={value.name}
								id={value._id}
								price={value.price}
								image={value.image}
							/>
						))}
					</div>
					
				</div>
			</div>
		</div>
	);
};

export default Collection;
