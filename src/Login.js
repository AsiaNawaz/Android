import React from 'react'
import Navigation from './Navigation'
import { useFormik } from 'formik'
import Footer from './Footer'
import * as Yup from 'yup'

const initialValues = {
    email: '',
    password: ''
}

const onSubmit = values => {
    console.log('Form data', values)
}



const validationSchema = Yup.object({
    email: Yup.string().email('Inavlid email format').required('Email Required'),
    password: Yup.string().required("Password Required")
})
export default function Login() {
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

                    <button type='login' className='Lbtn'><a className='link1' href='/'>Login</a></button>
                </form>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
            <div>
                <Footer />
            </div>
        </>
    )
}