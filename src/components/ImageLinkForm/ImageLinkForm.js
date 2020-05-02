import React from 'react';
 

const ImageLinkForm = () => {

	return (

		<div className = 'shadow-5' >
			<h1 className = 'f3 f2-m f1-l fw2 black-100 mv3'>
			{'This magic brain will detect faces in your images!'}	
			</h1>
			<h2 className = "f4 f4-m f3-l fw2 black-90 mt0 lh-copy" >
			{'Enter an image URL below!'}
			</h2>

			<div  >
				<input className = 'input-reset ba b--black-20 pa2 mb2 db w-70 center' type = 'text' />
				<button class = 'f7  grow w-15 link dim br2 ma2 ph3 pv2 mb2 dib white bg-dark-gray'>Detect </button>

			</div>
		</div>
	);
}

export default ImageLinkForm;