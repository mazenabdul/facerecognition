import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {



		if(isSignedIn){
return(
		<nav style = {{display: 'flex', justifyContent: 'flex-end', padding: '5px'}}>
			<p onClick={() => onRouteChange('signout')} 
			className = 'f4 link grow dim br3 ph3 pv2 mb2 dib white bg-black pointer'>Sign Out</p>
		</nav>
);

	} else {
	return (
		<nav style = {{display: 'flex', justifyContent: 'flex-end', padding: '5px'}}>
			<p onClick={() => onRouteChange('signin')} 
			className = 'f4 link grow dim br3 ph3 pv2 mb2 dib white bg-black pointer'>Sign In</p>
			<p onClick={() => onRouteChange('register')} 
			className = 'f4 link grow dim br3 ph3 pv2 mb2 dib white bg-black pointer'>Register</p>
		</nav>
		
);
	}
	
}

export default Navigation;