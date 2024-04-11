import React from 'react';
function Header(){
    return (
        <div>
            <nav className="px-5 navbar navbar-expand-lg bg-danger">
                <div className="container-fluid">
                    <a className="navbar-brand" href="e">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="h">Home</a>
                        <a className="nav-link" href="f">Features</a>
                        <a className="nav-link" href="f">Pricing</a>

                    </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Header;