import React from "react";
import Hero from "../components/heroSection/Hero";
import LatestCollection from "../components/LatestCollection";
//import Navbar from "../components/Navbar";
const Home = () => {
	return (
		<div>
			<Hero />
			<LatestCollection />
			<div className="flex px-10">
				<div>
					<img className="object-contain" src="https://calvinklein-eu.scene7.com/is/image/CalvinKleinEU/J20J224119_CDO_main?$b2c_updp_m_mainImage_1920$" alt="" />
				</div>
				<div>
					<img className="object-contain" src="https://calvinklein-eu.scene7.com/is/image/CalvinKleinEU/J20J224119_CDO_main?$b2c_updp_m_mainImage_1920$" alt="" />
				</div>
			</div>
		</div>
	);
};

export default Home;
