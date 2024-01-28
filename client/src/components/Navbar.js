import React from 'react'
import Login from '../components/Login'
import Logout from '../components/Logout'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const {isAuthenticated, isLoading, user} = useAuth0()

    return (
        <div className='navbar flex flex-row justify-between items-center p-6'>
            <ul className='flex flex-row justify-between items-center'>
            <li className="text-left flex-grow m-5">
                <Link to='/'>ABOT O' WOT</Link>
            </li>
            <li className="text-left flex-grow m-5">
                {isAuthenticated ? (
                    <Link to='/profile'>Profile</Link>
                ) : (
                    <></>
                )}
            </li>
            </ul>
            <div  className="text-right flex-grow m-5">
                <nav>
                    {isAuthenticated ? (
                        <Logout />
                    ) : (
                        <Login />
                    )}
                </nav>
            </div>
        </div>
    )
}

export default Navbar