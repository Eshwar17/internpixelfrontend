import React from 'react'
import './Alumni.css';
import cognizant from './Cognizant-Logo.jpg';
import hexaware from './hexaware.jpg';
import ibm from './ibm.jpg';
import sutherland from './sutherland.png';
import focus from './focuslogo.svg';
import infosys from './infosys.png';

const Alumni = () => {
  return (
    <div className="bodys">
        <div className="slider">
	<div className="slide-track">
		<div className="slide">
			<img src="data:image/png;base64,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" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src={ibm} height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="data:image/png;base64,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" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src={hexaware} height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src={focus} height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src={infosys} height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="data:image/png;base64,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" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="data:image/png;base64,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" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src={sutherland} height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="data:image/png;base64,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" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="data:image/jpeg;base64,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" height="100" width="250" alt="" />
		</div>
        <div className="slide">
			<img src={cognizant} height="100" width="250" alt="" />
		</div>
	</div>
</div>
</div>
  )
}

export default Alumni