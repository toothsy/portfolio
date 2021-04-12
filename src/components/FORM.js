import React from 'react'
import { useFormik } from 'formik'
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
	 const submitHandler=async val=>{
		let response = await window.emailjs.send(
			"doot-doot","template_cj0",
			{	from_name: val.name,
				email:val.email,
				content:val.message
				}
			)
		console.log("sent stuff",response)

	 }
	 const formik = useFormik({
		initialValues:{
		    name:"",
		    email:"",
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
				<div  className="msg" name="message"><textarea name="message" onChange={formik.handleChange} value={formik.values.message} rows={5} placeholder="Say Hi!!" type="submit"></textarea></div>
				<button type="submit" className="btn">send</button>
			</div>
	 </form>
	)
}
