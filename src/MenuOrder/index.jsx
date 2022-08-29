import React from "react";
import Camera from '../../dist/images/camera.png';
import Shop from '../../dist/images/shop.png';

const MenuOrder = () => {
	return (
		<div className="menuOrder">
			<div className="shop">
				<img src={Shop} alt="shop" />
			</div>
			<div className="camera">
				<img src={Camera} alt="picture" />
			</div>
		</div>
	)
}

export default MenuOrder;