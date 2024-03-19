import React from 'react'
import { Link, Element } from 'react-scroll';
import { FaHome } from 'react-icons/fa';
import { FaWrench } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';

export default function Navbar() {
  return (
	<div className="navbar-link">
		<li> 
			<Link to ="layout-container"  smooth="true" duration={100}> <FaHome /> </Link>
		</li>
		<li> 
			<Link to ="service-container"  smooth="true" duration={150}>  <FaWrench /> </Link>
		</li>
		<li> 
			<Link to ="project-container"  smooth="true" duration={125}>  <FaBriefcase /> </Link>
		</li>
		<li> 
			<Link to ="ethics-container" smooth="true" duration={100}> <FaInfoCircle /> </Link>
		</li>
	</div>
  )
}
