import React from 'react';
import {useState} from 'react';
import {toast} from "react-toastify";
 
// Import toastify css file
import "react-toastify/dist/ReactToastify.css";
 
// toast-configuration method,
// it is compulsory method.

export default function Project() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [status, setStatus] = useState('typing');

	async function handleSubmit(e) {
		e.preventDefault();
		setStatus('Sending');
		await sendMessage(name, email, phone);
		setStatus('sent')
	}
	const isSending = status === 'sending'
	const isSent = status === 'sent'

	// if (isSent) {
	// 	return <h1>Thanks for feedback!</h1>
	//   }
	

	async function sendMessage(text){
		await new Promise(resolve => {
			toast("Thnxs for your enquiry")
			setTimeout(resolve, 1000);
			console.log(`Message sent: ${name}, ${email}, ${phone}`);
		})
	}
  return (
	<div className="project-container">
	{ isSent ? (
		<div className='post-form'>
		<p>Thanks for your enquiry!</p>
		<p>Our team contact you shortly!</p>
		<p>You will receive the email within 24 hours</p>
		</div>
		) : (
		<div className="project-form">
		<p> Let's discuss your project ! </p>
		
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder='Name*' value ={name} disabled={isSending}  onChange={e => setName(e.target.value)} className="form-control"  required/>
				<input type="email" placeholder='Email*'  value ={email}  disabled={isSending}  onChange={e => setEmail(e.target.value)}  className="form-control"   required/>
				<input type="number" placeholder='123813121'  value= {phone} disabled={isSending} onChange={e => setPhone(e.target.value)}   className="form-control"  required />
				<button type="submit" className="btn btn-primary" disabled={isSending}  > Submit </button>
			</form>
			</div>
		) }	
	</div>
  )
}
