import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { Button, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import {Formik} from 'formik';
import * as yup from 'yup';
import axios from 'axios';

class SignUp extends Component {
    
    _handleFoormSubmit(values){
        console.log(values);
        axios.post('http://localhost:5001/user/register', values);
        
    };
    
    render() {
        return (
            <div style={{padding : 20}}>
                <h3>Sign in to your account</h3>
                <hr/>
                <Formik
                    initialValues={{FirstName:'',LastName:'',phoneNumber:'',email:'',password:''}}
                    onSubmit={this._handleFoormSubmit.bind(this)}
                    validationSchema={yup.object().shape({
                        FirstName:yup.string().required(),
                        LastName:yup.string().required(),
                        phoneNumber:yup.number().min(10).required(),
                        email:yup.string().email().required(),
                        password: yup.string().min(6).required()
                    })}
                    render={({
                        handleChange,
                        handleSubmit,
                        isValid,
                        isSubumitting,
                        handleBlur,
                        errors,
                        touched
                    })=>(
                        <div>
                            <FormGroup>
                                <Label>First Name</Label>
                                <Input name="FirstName"
                                    invalid={errors.FirstName && touched.FirstName}
                                    type="text"
                                    placeholder="First Name"
                                    onChange={handleChange} 
                                    onBlur={handleBlur}
                                    />
                                    {errors.FirstName && touched.FirstName ? (
                                        <FormFeedback>{errors.FirstName}</FormFeedback>
                                        ) : null}
                            </FormGroup>
                            <FormGroup>
                                <Label>Last Name</Label>
                                <Input name="LastName"
                                invalid={errors.LastName && touched.LastName} 
                                type="text" 
                                placeholder="Last Name"
                                onChange={handleChange} 
                                onBlur={handleBlur}
                                />
                                {errors.LastName && touched.LastName ? (
                                    <FormFeedback>{errors.LastName}</FormFeedback>
                                    ) : null}
                            </FormGroup>
                            <FormGroup>
                                <Label>Phone Number</Label>
                                <Input name="phoneNumber"
                                invalid={errors.phoneNumber && touched.phoneNumber} 
                                type="number" 
                                placeholder="+212600000000"
                                onChange={handleChange} 
                                onBlur={handleBlur}
                                />
                                {errors.phoneNumber && touched.phoneNumber ? (
                                    <FormFeedback>{errors.phoneNumber}</FormFeedback>
                                    ) : null}
                            </FormGroup>
                            <FormGroup>
                                <Label>Email</Label>
                                <Input name="email"
                                invalid={errors.email && touched.email} 
                                type="email" 
                                placeholder="someone@abolkog.com"
                                onChange={handleChange} 
                                onBlur={handleBlur}
                                />
                                {errors.email && touched.email ? (
                                    <FormFeedback>{errors.email}</FormFeedback>
                                    ) : null}
                            </FormGroup>
                            <FormGroup>
                                <Label>Password</Label>
                                <Input name="password"
                                invalid={errors.password && touched.password}
                                type="password" 
                                placeholder="Your Password"
                                onChange={handleChange} 
                                onBlur={handleBlur}
                                />
                                {errors.password && touched.password ? (
                                    <FormFeedback>{errors.password}</FormFeedback>
                                    ) : null}
                            </FormGroup>
                            <Button color='primary' block onClick={handleSubmit} disabled={!isValid || isSubumitting}>Sign In</Button>
                                        
                        </div>
                    )}
                    />
                <Link to='/login'>have an account? Sign In</Link>

            </div>
        )
    }
}



export {SignUp};