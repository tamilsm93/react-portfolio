import React from 'react';
import { Link } from 'react-scroll';

export default function ServiceBox({service , index}) {
  return (
	<div className="service-box" key={index}>
			<img src={service.imgUrl} alt="myImage" width="40" height="40" />
					<p> {service.name} </p>
			<Link to="/">Explore more -> </Link> 
	</div>
  )
}
