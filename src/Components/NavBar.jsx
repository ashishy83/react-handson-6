import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <div>
        <nav>
            <ul type="none">
                <li><Link to={'/'}  className='links'>Home</Link></li>
                <li> <Link to={'/student'} className='links'>Students</Link></li>
                <li><Link to={'/contactus'} className='links'>Contact Us</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar