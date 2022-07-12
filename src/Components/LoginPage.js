import React from 'react'
// import { useForm,register,handleSubmit } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'

function LoginPage() {
    let navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const goToDashboardPage = () => {
        navigate('dashboard')
    }
    return (


        <form onSubmit={handleSubmit(goToDashboardPage)}>
            <label > Email:</label> <br></br>
            <input type="text" {...register('email', { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />  <br></br>
            {errors.email && <p> Please check your email</p>}
            <label > Password:</label>  <br></br>
            <input type="password" {...register('password', { required: true, minLength: 8, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/ })} />  <br></br>
            {errors.password && <p>Please check Your Password</p>}
            <input type="submit" value="Login"></input>

        </form>

    )
}

export default LoginPage