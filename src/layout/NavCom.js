import React from 'react'
import { Link } from 'react-router'

const NavCom = () => {
    return (
        <div>
            <Link to="home" className='btn btn-primary'>Home</Link>
            <Link to="about" className='btn btn-primary'>About</Link>
        </div>
    )
}

export default NavCom
