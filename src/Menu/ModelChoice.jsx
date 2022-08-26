import React, { useState } from "react";

const ModelChoice = ({
	filterData,
	numberMarque,
	setNumberModel,
	numberModel
}) => {
	const [ choiceModelShow, setChoiceModelShow ] = useState(false);
	const modelSelection = (e) => {
		e.preventDefault();
		setNumberModel(e.target.dataset.modelId);
		setChoiceModelShow(false);
	}
	return (
		<>
			<li>Modèle</li>
			<div className={"choiceTable " + (choiceModelShow ? "modelLi" : "")}>
				<span className="triangle left" onClick={() => setChoiceModelShow(!choiceModelShow)}/>
				<img
					className="choiceTable-image"
					src={filterData.fabricant[numberMarque].model[numberModel].modelImage}
					alt="representation du modèle"
					onClick={() => setChoiceModelShow(!choiceModelShow)}
				/>
				<p>{filterData.fabricant[numberMarque].model[numberModel].modelName}</p>
				<span className="triangle right" onClick={() => setChoiceModelShow(!choiceModelShow)}/>
				{choiceModelShow && (
					<div className="model-choice">
						{filterData.fabricant[numberMarque].model.map((item, i) => (
							<div key={i} className="model" data-model-id={i} onClick={modelSelection}>
								<img src={item.modelImage} data-model-id={i} alt="representation du modèle" />
								<p data-model-id={i}>{item.modelName}</p>
							</div>
						))}
					</div>
				)}
			</div>
		</>
	)
}
export default ModelChoice;
