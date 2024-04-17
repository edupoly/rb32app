import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Features() {
  return (
    <div className='border border-4 p-2 m-2'>
        <h1>Features</h1>
        <ul>
            <li>
                <Link to="angular"> Angular </Link>
            </li>
            <li>
                <Link to="react"> ReactJS</Link>
            </li>
        </ul>
        <Outlet></Outlet>
    </div>
  )
}

export default Features