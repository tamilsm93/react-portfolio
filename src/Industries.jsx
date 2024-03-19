import React from 'react'

export default function Industries() {

 const companies = ['Automobiles', 'Education', 'Energy', 
 					  'Entertainment', 'Finance',
					'Fitness', 'Gaming', 'Health', 
				   'Hospitality', 'Logistics', 'Retails', 'Real Estates']
  return (
	<div class="industries-container">
		<h1>Industries  We serve </h1>
		<div class="industries-boxes">
			{companies.map((company, index) => (
			<div class="industry-box">
				<p>{company} </p>
			</div>
			))}
		</div>
	</div>
  )
}
