import React from 'react';
import Tilt from 'react-tilt'
import Icon from './Icon.png'
 

const Logo = () => {

	return (

		<div className = 'ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 40 }} style={{ height: 150, width: 150 }} >
 			<div className="Tilt-inner pa3"> <img style = {{paddingTop: '20px', height:'80px'}} alt = 'Logo'src = {Icon}/> </div>
			</Tilt>
		</div>
	);
}

export default Logo;