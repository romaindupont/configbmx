import React, { useState } from "react";

const InputColor = ({title, color, number}) => {
	const [ colorChoice, setColorChoice ] = useState(color);
	return (
		<>
		<li key={number}>{title}</li>
		<div className="input-color"><input type="color" id={title} name={title} value={colorChoice} onChange={e => setColorChoice(e.target.value)} /></div>
		</>
		)
	}
export default InputColor;