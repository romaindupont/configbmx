import React from "react";
import Menu from '../Menu';
import Configurator from "../Configurator";
import MenuOrder from "../MenuOrder";
import '../style.css';


const Home = () => {
	return (
		<>
			<Menu />
			<Configurator />
			<MenuOrder />
		</>
	)
}

export default Home;