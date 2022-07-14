import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
function AddUsers(props) {
    const [userData,setUserData]=useState({ 
         id: 1,
        firstName: '',
        lastName: '',
        email: '',
        password: 'Miri@123'})
    const { register, handleSubmit, formState: { errors } } = useForm()
 const addUserData = (data) =>{
    setUserData(previousState => {
        localStorage.setItem('formdata', JSON.stringify({ ...previousState, ...data }))
      })
      console.log(data);
      console.log(props);
    props.addUser(data);
 }
    return (
        <>
            <form onSubmit={handleSubmit(addUserData)}>
                <label>
                    firstName:
                </label> <br />
                <input type="text" {...register('firstname', { required: true, maxLength: 10 })} />  <br />
                {errors.firstname && <p>Please check your FirstName</p>}
                <label>
                    LastName:</label>    <br />
                <input type="text" {...register('lastname', { required: true, maxLength: 10 })} /> <br />
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
        </>
    )
}

export default AddUsers