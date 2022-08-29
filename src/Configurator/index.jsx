import React, {useEffect} from "react";

const Configurator = async () => {
	 const viewerIframe = document.getElementById("emersyaIframe");
	 console.log(viewerIframe)
	/*viewerIframe.postMessage({
		action : "registerCallback"
		}, "*"); */
		window.addEventListener("message", function(event){
			if(event && event.data && event.data.action == "onStateChange"){
			console.log(event)
			}
			}, false);
	
	return (
		<div className="configurator">
			<iframe id="emersyaIframe" src="https://emersya.com/showcase/W3C2GS773F" frameBorder="0"
width="100%" height="100%" allow="camera;gyroscope;accelerometer;magnetometer" webkitallowfullscreen="true"
mozallowfullscreen="true" allowFullScreen={true} style={{display:"block"}}></iframe>
		</div>
	)
}
/* https://emersya.com/showcase/W3C2GS773F https://emersya.com/testEmbedJsApp/RD7SRIAYV4?test_mode=true*/
export default Configurator;