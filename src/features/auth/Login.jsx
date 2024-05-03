import { useFormik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'
import {  useUserloginMutation } from '../../services/authentication'
import { useDispatch } from 'react-redux'
import { setLoginStatus } from './userSlice'

function Login() {
    var [loginFn]=useUserloginMutation()
    var dispatch = useDispatch();

    var loginForm=useFormik({
        initialValues:{
            username:'',
            password:''
        },
        onSubmit:(values)=>{
            loginFn(values).then((res)=>{
                if(res.data.msg==='loginsuccess'){
                    window.localStorage.setItem("token",res.data.token)
                    dispatch(setLoginStatus(true))
                }
            })
        }
    })
  return (
    <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link class="navbar-brand" to="/">Edupoly</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
            </nav>
            <div className='d-flex justify-content-center'>
                <div className='w-25 text-center'>
                    <form onSubmit={loginForm.handleSubmit}>
                        <input type="text" placeholder='User Name' className='form-control m-2' {...loginForm.getFieldProps('username')}/>
                        <input type="password" placeholder='Password' className='form-control m-2'  {...loginForm.getFieldProps('password')}/>
                        <button className='form-control btn btn-success m-2'>Login</button>
                    </form>
                </div>
                
            </div>
    </>
    
  )
}

export default Login