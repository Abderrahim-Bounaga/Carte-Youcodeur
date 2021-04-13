import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input ,FormFeedback, Alert } from 'reactstrap';
import {Formik} from 'formik';
import * as yup from 'yup';
import axios from 'axios';


class login extends Component {
    
    

    _handleFormSubmit(values){
        
        console.log(values);
        axios.post('http://localhost:5001/user/login', values).then((response) => {
            console.log(response)
            localStorage.setItem('auto_token', response.data)
                this.props.history.push('/')
            }).catch((error) => { console.log(error) })
     
    }
    
    
    render() {
        return (
            <div style={{padding : 20}}>
                <h3>Sign in to your account</h3>
                <hr/>
                <Formik
                    initialValues={{email:'',password:''}}
                    onSubmit={this._handleFormSubmit.bind(this)}
                    validationSchema={yup.object().shape({
                        email: yup.string().email().required(),
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
                <Link to='/SignUp'>Do not have an account? Sign Up Now</Link>
            </div>
        )
    }
}

export {login}