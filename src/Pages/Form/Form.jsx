import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import './Form.css'

// const FormValues = {
//     firstName: String,
//     lastName: String,
//     email: String,
//     phoneNumber: Number,
//     dateOfBirth: Date,
//     comments: String
// };

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
            <div className="mt-5 wform">
                <h3 className='formtitle'>Form</h3>
                <form className='mt-4 mx-5 mb-4' onSubmit={handleSubmit(onSubmit)}>
                    <p><strong>Please fill your details:</strong></p>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input {...register("firstName", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })} type="text" className="form-control" id="firstName" placeholder="Your first name" />
                        {errors.firstName?.type === "required" && <p className='mt-2 errormessage'>First Name can't be empty.</p>}
                        {errors.firstName?.type === "maxLength" && <p className='mt-2 errormessage'>First name can't exceed 20 characters.</p>}
                        {errors.firstName?.type === "pattern" && <p className='mt-2 errormessage'>Alphabetical characters only.</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input {...register("lastName", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your last name" />
                        {errors.lastName?.type === "required" && <p className='mt-2 errormessage'>Last Name can't be empty.</p>}
                        {errors.lastName?.type === "maxLength" && <p className='mt-2 errormessage'>Last name can't exceed 20 characters.</p>}
                        {errors.lastName?.type === "pattern" && <p className='mt-2 errormessage'>Alphabetical characters only.</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input {...register("email", { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })} type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        {errors.email?.type === "required" && <p className='mt-2 errormessage'>Email Name can't be empty.</p>}
                        {errors.email?.type === "pattern" && <p className='mt-2 errormessage'>Invalid Email Address.</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input {...register("phoneNumber", { required: true, minLength: 6, maxLength: 12, pattern: /^[0-9]+$/ })} type="number" className="form-control" id="exampleFormControlInput1" placeholder="021 12345" />
                        {errors.phoneNumber?.type === "required" && <p className='mt-2 errormessage'>Phone number can't be empty.</p>}
                        {errors.phoneNumber?.type === "minLength" && <p className='mt-2 errormessage'>Phone number can't less than 6 characters.</p>}
                        {errors.phoneNumber?.type === "maxLength" && <p className='mt-2 errormessage'>Phone number can't exceed 12 characters.</p>}
                        {errors.phoneNumber?.type === "pattern" && <p className='mt-2 errormessage'>Numbers only.</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="dateOfBirth">Date of Birth</label>
                        <input {...register("dateOfBirth", { required: true })} type="date" className="form-control" id="exampleFormControlInput1" />
                        {errors.dateOfBirth?.type === "required" && <p className='mt-2 errormessage'>You must choose Date of Birth.</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="comments">Comments</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter comments here"></textarea>
                    </div>
                    <button id='submitbutton' className='btnn blue mr-2' type='submit'>Submit</button>
                    <button id='resetbutton' className='btnn blue mr-2' type='reset'>Reset</button>
                    <Link to='/'><button className='btnn black'>Home</button></Link>
                </form>
            </div>

        </>
    )
}

export default Form
