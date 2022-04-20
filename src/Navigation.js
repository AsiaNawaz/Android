import React from 'react';
import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <>
            <nav className="navbarstyle">
                <ul className='navitems'>
                    <b><li className='itemstyle'><Link to='/' className='effect'>Home</Link></li></b>
                    <b><li className='itemstyle'><Link to='/challenge' className='effect'>Challenge</Link></li></b>
                    <b><li className='itemstyle'><Link to='/tools' className='effect'>Tools</Link></li></b>
                    <b><li className='itemstyle'><Link to='/review' className='effect'>Reviews</Link></li></b>
                    <li className='itemstyle'>
                        <div className='Account'>
                            <button className='btn'><b>Account</b></button>
                            <div className='content'>
                                <b><Link to='/login' className='acc effect'>Log In</Link></b>
                                <b><Link to='/signup' className='acc effect'>Sign Up</Link></b>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    )
}
