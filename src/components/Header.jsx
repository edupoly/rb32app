import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Header() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link class="navbar-brand" to="/">Edupoly</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/countries">Countries</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/posts">Posts</Link>
                    </li>
                </ul>
            </div>
        </nav>
        <main className='container'>
            <Outlet></Outlet>
        </main>
    </div>
  )
}

export default Header