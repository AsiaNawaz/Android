import React from 'react'
import Navigation from './Navigation'
import { useFormik } from 'formik'
import Footer from './Footer'
import * as Yup from 'yup'


const initialValues = {
    username: '',
    email: '',
    password: '',
    confirm_password: ''
}

const onSubmit = values => {
    console.log('Form data', values)
}


const validationSchema = Yup.object({
    username: Yup.string().required("Username Required"),
    email: Yup.string().email("Invalid email format").required("Email required"),
    password: Yup.string().required("Password Required"),
    confirm_password: Yup.string().oneOf([Yup.ref('password'),''], 'Passwords must match').required('Password required')
})

export default function Signup() {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    return (
        <>
            <div>
                <Navigation />
            </div>

            <div className='formstyle'>
                <form onSubmit={formik.handleSubmit}>
                    <br />
                    <div className='form-control'>
                        <label htmlFor='username' className='LLable'>Username</label>
                        <input
                            type='text'
                            id='username'
                            name='username'
                            placeholder='Enter username'
                            onChange={formik.handleChange}
                            value={formik.values.username}
                            className='Userinput'
                        />
                        {formik.errors.username ? <div className='error'>{formik.errors.username}</div> : null}
                    </div>

                    <div className='form-control'>
                        <label htmlFor='email' className='LLable'>Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            placeholder='Email@gmail.com'
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            className='Userinput'
                        />
                        {formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
                    </div>

                    <div className='form-control'>
                        <label htmlFor='password' className='LLable'>Password</label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            placeholder='Enter Password'
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            className='Userinput'
                        />
                        {formik.errors.password ? <div className='error'>{formik.errors.password}</div> : null}
                    </div>

                    <div className='form-control'>
                        <label htmlFor='password' className='LLable'>Confirm Password</label>
                        <input
                            type='password'
                            id='confirm_password'
                            name='confirm_password'
                            placeholder='Again enter Password'
                            onChange={formik.handleChange}
                            value={formik.values.confirm_password}
                            className='Userinput'
                        />
                        {formik.errors.confirm_password ? <div className='error'>{formik.errors.confirm_password}</div> : null}
                    </div>
                    <button type='submit' className='Lbtn'><a href='/'>Submit</a></button><br /><br />
                </form>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
            <div>
                <Footer />
            </div>
        </>
    )
}
