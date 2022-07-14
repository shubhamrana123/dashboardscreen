import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import UserList from './UserList';
function AddUsers(props) {
    
    let navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const addUserDataList = (data) => {
        data.id = props.list.length + 1;
        props.addUser(data);
        navigate('/dashboard')

    }
    return (
        <>
            <form onSubmit={handleSubmit(addUserDataList)}>
                <label>
                    firstName:
                </label> <br />
                <input type="text" {...register('firstName', { required: true, maxLength: 10 })} />  <br />
                {errors.firstname && <p>Please check your FirstName</p>}
                <label>
                    LastName:</label>    <br />
                <input type="text" {...register('lastName', { required: true, maxLength: 10 })} /> <br />
                {errors.lastname && <p>Please check your LastName</p>}
                <label>
                    Email:
                </label>  <br />
                <input type="text" {...register('email', { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />  <br />
                {errors.email && <p>Please check your Email</p>}
                <label>
                    Password:
                </label>   <br />
                <input type="text" {...register('password', { required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/ })} /> <br />
                {errors.password && <p>Please check your password</p>}
                {/* <select>
                    <option>Select Roles</option>
                    <option>Admin</option>
                    <option>Cloud</option>
                </select>   <br /> */}
                <button type="submit"> Save</button>
                <button type="button"> Cancel</button>

            </form>
            {/* <UserList list ={userData}></UserList> */}
        </>
    )
}

export default AddUsers