import React, { useState } from "react";
import ChoiceMenu from "./ChoiceMenu";
import InputColor from "./InputColor";

const SubMenu = ({subMenuTitle, closeSecondMenu, menuTitle, filterData}) => {
	const [ numberMarque, setNumberMarque ] = useState(0);
	const [ numberTexture, setNumberTexture ] = useState(0);
	return (
		<nav className="secondMenu">
			<div className="close" onClick={closeSecondMenu}></div>
			<h1 className="secondMenu-title">{menuTitle}</h1>
			<ul>
				{subMenuTitle.map((title, i)=> ( 
					title === 'fabricant' ? 
					<ChoiceMenu title={title} filterData={filterData} filterDataTitle={filterData.fabricant[numberMarque].marque} number={i} numberMarque={numberMarque} setNumberMarque={setNumberMarque} /> : 
					title === 'texture' ? 
					<ChoiceMenu title={title} filterData={filterData} filterDataTitle={filterData.texture[numberTexture].nomTexture} number={i}  numberTexture={numberTexture} setNumberTexture={setNumberTexture}/> :
					<InputColor title={title} color={filterData.colorPrincipal} number={i} />
				))}
			</ul>
		</nav>
	)
}

export default SubMenu;