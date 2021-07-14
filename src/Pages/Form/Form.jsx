import React from 'react'
import { Link } from 'react-router-dom'
import './Form.css'

const Form = () => {
    return (
        <>
            <div className="mt-5 wform">
                <h3 className='formtitle'>Form</h3>
                <form className='mt-4 mx-5 mb-4'>
                    <p><strong>Please fill your details:</strong></p>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">First Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your first name"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Last Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your last name"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Phone Number</label>
                        <input type="phone" className="form-control" id="exampleFormControlInput1" placeholder="021 12345"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Date of Birth</label>
                        <input type="date" className="form-control" id="exampleFormControlInput1"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Comments</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter comments here"></textarea>
                    </div>
                    <button className='btnn blue mr-3' type='submit'>Submit</button>
                    <Link to='/'><button className='btnn black'>Home</button></Link>
                </form>
            </div>
            
        </>
    )
}

export default Form
