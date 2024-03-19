import React from 'react'
import mobile_design from './images/mobile_design.svg'
import { Link } from 'react-scroll'
import LayoutLink from './components/LayoutLink'

export default function Layout(props) {
  return (
	<div className="layout-container">
		<div className="layout-content">
		<h1 className='center-text'>{props.name}</h1> 
			<p> IOS | Andriod |  Windows</p>
				<p> {props.details}</p>
				<div className="button-container">
					<button type="button" className="btn btn-primary">Start your website Now!</button><br />
					<button type="button" className="btn btn-primary">Get your Free Quote</button>
				</div>
				<img src={mobile_design} alt="myImage" width="450" height="200" />
				<p> IOS | Andriod </p>
				<LayoutLink />
		</div>
	</div>
  )
}


