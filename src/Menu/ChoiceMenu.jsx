import React, { useState } from "react";

const ChoiceMenu = ({title, filterData, filterDataTitle}) => {
	const [ array, setArray ] = useState(false);
	console.log(filterDataTitle)
	return (
		<>
			<li key={title}>{title}</li>
			<div className="choiceTable"><span className="triangle left"></span><p>{filterDataTitle}</p><span className="triangle right"></span></div>
		</>
	)
}
export default ChoiceMenu;
