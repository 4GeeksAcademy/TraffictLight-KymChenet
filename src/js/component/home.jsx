import React, { useState } from "react";

//create your first component
const Home = () => {
	const [selectedColor, setSelectedColor] = useState("yellow");

	
	return ( <div className="container">  
				 <div className="caja">
					<div className="caja1">s</div>
				</div>
				    
					<div className="Traffict-Light">
						<div 
						onClick={() => setSelectedColor("red")}
						className={
							"light red"+(selectedColor === "red"? " glow" : "")
							}></div>
						<div 
						onClick={() => setSelectedColor("yellow")}
						className={
							"light yellow"+(selectedColor === "yellow" ? " glow" : "")
							}></div>
						<div 
						onClick={() => setSelectedColor("green")}
						className={
							"light green"+(selectedColor === "green"? " glow" : "")
							}></div>
					</div>
		</div>
	);
};

export default Home;