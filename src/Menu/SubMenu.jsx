import React from "react";

const SubMenu = ({subMenuTitle, closeSecondMenu, menuTitle}) => {
	console.log(subMenuTitle)
	return (
		<nav className="secondMenu">
			<div className="close" onClick={closeSecondMenu}></div>
			<h1>{menuTitle}</h1>
			<ul>
				{subMenuTitle.map((title)=> ( <li>{title}</li> ))}
			</ul>
		</nav>
	)
}

export default SubMenu;