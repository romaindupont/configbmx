import React, { useState } from "react";
import ModelChoice from "./ModelChoice";

const ChoiceMenu = ({
	title,
	filterData,
	filterDataTitle,
	number,
	setNumberMarque,
	numberMarque,
	setNumberTexture,
	numberTexture
}) => {
	const leftClic = () => {
		if (title == 'fabricant') {
			if (numberMarque-1 < 0) {
				setNumberMarque(filterData.fabricant.length - 1)
			}
			else {
				setNumberMarque(numberMarque - 1)
			}
		}
		else {
			if (numberTexture-1 < 0) {
				setNumberTexture(filterData.texture.length - 1)
			}
			else {
				setNumberTexture(numberTexture - 1)
			}
		}
	}
	const rightClic = () => {
		if (title == 'fabricant') { 
			if (numberMarque + 1 > (filterData.fabricant.length - 1)) {
				setNumberMarque(0)
			}
			else {
				setNumberMarque(numberMarque+1)
			}
		}
		else {
			if (numberTexture + 1 > (filterData.texture.length - 1)) {
				setNumberTexture(0)
			}
			else {
				setNumberTexture(numberTexture + 1)
			}
		}
	}
	console.log(filterData)
	return (
		<>
			<li key={number}>{title}</li>
			<div className="choiceTable"><span className="triangle left" onClick={leftClic}></span><p>{filterDataTitle}</p><span className="triangle right" onClick={rightClic}></span></div>
			{title === 'fabricant' ? <ModelChoice filterData={filterData} numberMarque={numberMarque} /> : '' }
		</>
	)
}
export default ChoiceMenu;
