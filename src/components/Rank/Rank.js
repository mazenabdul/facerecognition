import React from 'react';



const Rank = ({name, entries}) => {

	return (

	<div >
		
		<div className = 'white f3 pa3'>
		{`${name} , Your current entry count is...`}
		</div>

		<div className = 'white f3 pa3'>
			{entries}
			
		</div>

		</div>
	);
}

export default Rank;