import React from 'react'
import {Link } from 'react-scroll';
import apple from '../images/apple.png'
import android from '../images/android.png'

export default function Header() {
  return (
	<div className="header-container">
		<div className="nav-container">
		<nav className="navbar navbar-expand-lg navbar-light">
			<img src = {android} width={25} height={25}/>  
			<span style={{ color: 'white', padding: '10px', fontSize: '25px'}}> Teckie App Company </span>
			<p>Home</p>
			<p>Service</p>
		</nav>	
		</div>
	</div>
  )
}
