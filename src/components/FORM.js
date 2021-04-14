import React from 'react'
import { useFormik } from 'formik'
import swal from 'sweetalert';
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
			{from_name: val.name,
				email:val.email,
				content:val.message
				}
			)
		// console.log("resposonse is ",response.status)
		response.status === 200 ? swal("Nice, the mail was sent","I will contact you ASAP!!","success"):console.log(response)

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
				<label htmlFor="name">Name
				<input type="text" className="input" name="name" onChange={formik.handleChange} value={formik.values.name}/>
				</label>	
				{formik.errors.name && formik.touched.name && (<div className="feba one">{formik.errors.name}</div>)}

				<label htmlFor="email">Email
				<input type="email" className="input" name="email" onChange={formik.handleChange} value={formik.values.email}/>
				</label>
				{formik.errors.email && formik.touched.email && (<div className="feba two">{formik.errors.email}</div>)}
				<label  className="msg" name="message">
					<textarea name="message" onChange={formik.handleChange} value={formik.values.message} rows={5} placeholder="Say Hi!!" type="submit">
						
					</textarea>
				</label>
				<button type="submit" className="btn">send</button>
			</div>
	 </form>
	)
}
