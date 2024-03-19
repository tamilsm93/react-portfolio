import React from 'react';

export default function Venture(props) {
  return (
	<div className="venture-container">
		<h1> {props.description} </h1>
		<p> {props.details} </p>
		<button type="button" class="btn btn-primary">Let's Talk</button>
	</div>
  )
}
