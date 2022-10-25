import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <nav className="bg-dark navbar-dark navbar">
            <div className="row col-12 d-flex justify-content-center text-white">
            <Link to='/'><h3>קופת חולים</h3></Link>
            <Link to='/add' style={{marginLeft:'15px'}}><h3>add</h3></Link>
            </div>
        </nav>
    )
}
export default Header;