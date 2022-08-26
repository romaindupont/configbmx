import React, { useState } from "react";
import Data from '../data/menu';
import SubMenu from "./SubMenu";

const Menu = () => {
	const [ openSecondMenu, setOpenSecondMenu ] = useState(false);
	const [ myData ] = useState(Data);
	const [ filterData, setFilterData ] = useState({
		data: Data,
		open: false
	});
	const [ spec, setSpec ] = useState([]);
	let arraySpec = [];
	const menuClic = (e) => {
		e.preventDefault();
		setSpec([])
		if (e.target.textContent.length < 25) {
			setFilterData({data: myData.filter(data => data.name === e.target.textContent), open: true});
			if (filterData.open) {
				arraySpec = [];
				for (let title in filterData.data[0].specification[0]) {
					arraySpec.push(title);
				}
				setSpec(arraySpec);
				setOpenSecondMenu(true);
			}
		}
}
const menuHover = (e) => {
	e.preventDefault();
	if (e.target.textContent.length < 25) {
		setFilterData({data: myData.filter(data => data.name === e.target.textContent), open: true});
	}
}
	const closeSecondMenu = () => {
		setOpenSecondMenu(false);
		setFilterData({data: myData, open: false});
	}
	return (
		<>
			<nav className="menu">
				<ul className="menu-ul" onClick={menuClic}>
					{
						myData.map((data, i) => {
							return (
								<li key={i} className="menu-li" onMouseEnter={menuHover}>{data.name}</li>
							)
						})
					}
				</ul>
			</nav>
			{openSecondMenu  && (
				<SubMenu
					subMenuTitle={spec}
					closeSecondMenu={closeSecondMenu}
					menuTitle={filterData.data[0].name}
					filterData={filterData.data[0].specification[0]}
				/>
			)}
		</>
	)
}

export default Menu;