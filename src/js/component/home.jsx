import React, { useState } from "react";

//create your first component
const Home = () => {
	const [selectedColor, setSelectedColor] = useState("yellow");
	const [colors, setColors] = useState(["red", "yellow", "green"])

	
	const addPurpleColor = () => {
		if(!colors.includes("purple")) {
			setColors([...colors, "purple"])
		} }

	const toggleColor = () => {
		const currentIndex = colors.indexOf(selectedColor);
		const nextIndex = (currentIndex + 1) % colors.length;
		setSelectedColor(colors[nextIndex])
		
	}

	
	return ( <div className="container">  
				 <div className="caja">
					<div className="caja1">s</div>
				</div>
				    
					<div className="Traffict-Light">
						 {colors.map((color) => (
							<div 
							key={color}
							onClick={() => setSelectedColor(color)}
							className={"light " + color + (selectedColor === color? " glow" : "")
							}></div>
						 ))}
					</div>
					<div className="d-flex justify-content-center">
						<button className="btn btn-outline-danger mt-3" onClick={addPurpleColor}>Add Purple</button>
					</div>
					<div className="d-flex justify-content-center">
						<button className="btn btn-outline-warning mt-3" onClick={toggleColor}>Toggle Colors</button>	 
					</div>
			</div>
	);
};

export default Home;