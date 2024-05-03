import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import { logout } from '../features/auth/userSlice'

function Header() {
    var dispatch=useDispatch()
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link class="navbar-brand" to="/">Edupoly</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/countries">Countries</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/posts">Posts</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/products">Products</Link>
                    </li>
                </ul>
                <button className='btn btn-success' onClick={()=>{dispatch(logout())}}>Logout</button>
            </div>
        </nav>
        
    </div>
  )
}

export default Header