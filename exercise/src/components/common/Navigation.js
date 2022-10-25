import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
  return (
    <nav className='navbar navbar-expand-sm bg-light'>
      <a className='navbar-brand'>Book Reactions</a>
        <Link className='navbar-item mx-3' to='/'> Home</Link>
        <Link className='navbar-item mx-3' to='/about'>About</Link>
    </nav>
  )
}

export default Navigation;