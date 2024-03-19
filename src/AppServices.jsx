import React from 'react'
import { Link } from 'react-router-dom';
import ServiceBox from './components/ServiceBox';

export default function AppServices() {

	const list_services = [
		{
			imgUrl: 'https://cdn0.iconfinder.com/data/icons/elpis/144/Web_Design-512.png',
			name: 'Native IOS App',
		},
		{
			imgUrl: 'https://c8.alamy.com/comp/R812DJ/drag-mobile-design-ui-ux-flat-icon-green-and-yellow-sign-and-symbols-for-website-and-mobile-appliation-vector-illustration-R812DJ.jpg',
			name: 'Native Andriod App ',
	
		},
		{
			imgUrl: 'https://htsm.in/img/Flutter-App-Development.webp',
			name: 'Flutter App ',
		},
		{
			imgUrl: 'https://neetable.com/img/react-native/react-native-app-development-banner.png',
			name: 'React Native App',
		},
		{
			imgUrl: 'https://neetable.com/img/react-native/react-native-app-development-banner.png',
			name: 'App UI & UX Design',
		},
		{
			imgUrl: 'https://neetable.com/img/react-native/react-native-app-development-banner.png',
			name: 'App Maintainance',
		},
		{
			imgUrl: 'https://neetable.com/img/react-native/react-native-app-development-banner.png',
			name: 'Game Development',
		},
		{
			imgUrl: 'https://neetable.com/img/react-native/react-native-app-development-banner.png',
			name: 'AL/ML'
		}
	];
  return (
	<div class="service-container">
		<h1> Our app development Services</h1>
		<div className="service-boxes-container">
		{ list_services.map((service, index) => ( 
			<ServiceBox key ={index} service={service}/>
			))}
		</div>
	</div>
  );
};
