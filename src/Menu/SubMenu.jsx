import React, { useState, useEffect } from "react";
import ChoiceMenu from "./ChoiceMenu";
import InputColor from "./InputColor";

const SubMenu = ({
	subMenuTitle,
	closeSecondMenu,
	menuTitle,
	filterData
}) => {
	const [ numberMarque, setNumberMarque ] = useState(0);
	const [ numberTexture, setNumberTexture ] = useState(0);
	const [ numberModel, setNumberModel ] = useState(0);
	const [ orderCadreSelection, setOrderCadreSelection ] = useState({
		Idfabricant: '',
		modeleId: '',
		colorPrincipal: '',
		secondColor: '',
		textureId: ''
	});
	const validButtonClick = (e) => {
		console.log(orderCadreSelection)
	}
	useEffect(() => {
		setOrderCadreSelection({...orderCadreSelection,
			Idfabricant: filterData.fabricant[numberMarque].id,
			modeleId: filterData.fabricant[numberMarque].model[numberModel].id
		})
 	}, [numberMarque, numberModel]);
	return (
		<nav className="secondMenu ">
			<div className="close" onClick={closeSecondMenu}></div>
			<h1 className="secondMenu-title">{menuTitle}</h1>
			<ul>
				{subMenuTitle.map((title, i) => ( 
					title === 'fabricant' ? 
					<ChoiceMenu
						title={title}
						filterData={filterData}
						filterDataTitle={filterData.fabricant[numberMarque].marque} 
						number={i}
						numberMarque={numberMarque}
						setNumberMarque={setNumberMarque}
						key={i}
						numberModel={numberModel}
						setNumberModel={setNumberModel}
					/> : 
					title === 'texture' ? 
					<ChoiceMenu
						title={title}
						filterData={filterData}
						filterDataTitle={filterData.texture[numberTexture].nomTexture}
						number={i}
						numberTexture={numberTexture}
						setNumberTexture={setNumberTexture}
						key={i}
						numberModel={numberModel}
						setNumberModel={setNumberModel}
					/> :
					<InputColor
						title={title}
						color={filterData.colorPrincipal}
						number={i}
						key={i}
						numberModel={numberModel}
						setNumberModel={setNumberModel}
						orderCadreSelection={orderCadreSelection}
						setOrderCadreSelection={setOrderCadreSelection}
					/>
				))}
			</ul>
			<button type="button" onClick={validButtonClick}>Valider</button>
		</nav>
	)
}

export default SubMenu;