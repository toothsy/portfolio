import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
export default function FORM() {

	const validateLogic = val =>{
		const error ={}
		 // eslint-disable-next-line
		let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if(!re.test(val.email)){
	
		    error.email="proper email needed"
		}
		if(!val.name){
		    error.name="name needed"
		}
		return error;
	 }
	 const submitHandler=val=>{
		axios({
			method:"post",
			url:'https://doot-server.herokuapp.com/email',
			data:{
				email:val.email,
				name:val.name,
				message:val.message,
				subject:val.subject
			}
		})
		 console.log("sent stuff")
		console.log(val);

	 }
	 const formik = useFormik({
		initialValues:{
		    name:"",
		    email:"",
		    subject:"",
		    message:""
		},
		validate:validateLogic,
		onSubmit:submitHandler
		
	 })
	return (
		<form className="contact-form" onSubmit={formik.handleSubmit}> 
			<div className="input-fields">
				<label htmlFor="name">Name</label>
				<input type="text" className="input" name="name" onChange={formik.handleChange} value={formik.values.name}/>

				{formik.errors.name && formik.touched.name && (<div className="feba">{formik.errors.name}</div>)}

				<label htmlFor="email">Email</label>
				<input type="text" className="input" name="email" onChange={formik.handleChange} value={formik.values.email}/>

				{formik.errors.email && formik.touched.email && (<div className="feba">{formik.errors.email}</div>)}

				<label htmlFor="subject">Subject</label>
				<input type="text" className="input" name="subject" onChange={formik.handleChange} value={formik.values.subject}/>
				<div  className="msg" name="message"><textarea name="message" onChange={formik.handleChange} value={formik.values.message} rows={5} placeholder="Say Hi!!" type="submit"></textarea></div>
				<button type="submit" className="btn">send</button>
			</div>
	 </form>
	)
}
