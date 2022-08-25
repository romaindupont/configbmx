import React, { useState } from "react";

const ModelChoice = ({
	filterData,
	numberMarque,
}) => {
	const [ numberModel, setNumberModel ] = useState(0);
	const [ choiceModelShow, setChoiceModelShow ] = useState(false)
	return (
		<>
			<li>Modèle</li><div className="choiceTable"><span className="triangle left" onClick={()=>setChoiceModelShow(!choiceModelShow)}></span><img className="choiceTable-image" src={filterData.fabricant[numberMarque].model[numberModel].modelImage} alt="" /><p>{filterData.fabricant[numberMarque].model[numberModel].modelName}</p><span className="triangle right" onClick={()=>setChoiceModelShow(!choiceModelShow)}></span></div>
			{choiceModelShow && (
				<div className="model-choice">
					{filterData.fabricant[numberMarque].model.map((item,i)=> (
					<div key={i} className="model"><img src={item.modelImage} alt="" /><p>{item.modelName}</p></div>
					))}
				</div>
			)}
		</>
	)
}
export default ModelChoice;
