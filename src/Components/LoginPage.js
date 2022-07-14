import React, { useState } from 'react'
// import { useForm,register,handleSubmit } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'

function LoginPage(props) {
    let navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onLoginUser = (data) => {
        console.log(data)
        const index = props.userList.findIndex(item => item.email == data.email && item.password == data.password);
        if (index != -1) {
            alert("Login successfully");
            navigate('dashboard');
        }
        else {
            alert("email or password wrong")
        }
    }
    return (

        <div className='row'>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand">Navbar</a>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <div className='col-md-4'></div>
            <div className='col-md-4'>
                <br />
                <form onSubmit={handleSubmit(onLoginUser)}>
                    <label > Email:</label> <br></br>
                    <input className='form-control' type="text" {...register('email', { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />  <br></br>
                    {errors.email && <p> Please check your email</p>}
                    <label > Password:</label>  <br></br>
                    <input className='form-control' type="password" {...register('password', { required: true, minLength: 8, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/ })} />  <br></br>
                    {errors.password && <p>Please check Your Password</p>}
                    <input className='form-control btn btn-success' type="submit" value="Login"></input>

                </form>

            </div>
            <div className='col-md-4'></div>
        </div>

    )
}

export default LoginPage