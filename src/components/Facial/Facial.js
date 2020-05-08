import React from 'react';
import './Facial.css'
 

const Facial = ({imageUrl, box}) => {

	return (

<div className =  'center ma'>

	<div className = 'absolute mt2'>
		<img id = 'InputImage' alt = '' src = {imageUrl} width = '500px' height = 'auto'/>
			<div className ='bounding-box' 
			style = {{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}>
		</div>

		 
		 </div> 	
</div>

		
	);
}

export default Facial;