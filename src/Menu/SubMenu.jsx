import React from "react";
import ChoiceMenu from "./ChoiceMenu";
import InputColor from "./InputColor";

const SubMenu = ({subMenuTitle, closeSecondMenu, menuTitle, filterData}) => {
	return (
		<nav className="secondMenu">
			<div className="close" onClick={closeSecondMenu}></div>
			<h1 className="secondMenu-title">{menuTitle}</h1>
			<ul>
				{subMenuTitle.map((title, i)=> ( 
					title === 'fabricant' ? 
					<ChoiceMenu title={title} filterData={filterData} filterDataTitle={filterData.fabricant[0].marque} /> : 
					title === 'texture' ? 
					<ChoiceMenu title={title} filterData={filterData} filterDataTitle={filterData.texture[0].nomTexture} /> :
					<InputColor title={title} color={filterData.colorPrincipal} number={i} />
				))}
			</ul>
		</nav>
	)
}

export default SubMenu;

