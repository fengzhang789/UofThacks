import React from 'react'
import Login from '../components/Login'
import Logout from '../components/Logout'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom';
import flower from '../assets/images/flower1.png'


const Navbar = () => {
    const {isAuthenticated, isLoading, user} = useAuth0()

    return (
        <div className='navbar flex flex-row justify-between items-center p-6'>
            <ul className='flex flex-row justify-between items-center'>
                <img src={flower} className="flex-grow  m-5 max-w-10" alt="flower"/>
                <li className="text-left flex flex-row mr-5 flex-grow">
                    <Link to='/'>ABOT O' WOT</Link>
                </li>
                <li className="text-left flex-grow m-5 flex flex-row gap-x-5">
                    {isAuthenticated ? (
                        <>
                            <Link to='/profile'>Profile</Link>
                            <Link to="/upload">Upload</Link>
                            <Link to="/comment">Comment</Link>
                        </>
                        
                    ) : (
                        <></>
                    )}
                </li>
            </ul>
            <div  className="text-right flex-grow m-5">
                <nav>
                    {isAuthenticated ? (
                        <>
                            <Logout />
                        </>
                    ) : (
                        <Login />
                    )}
                </nav>
            </div>
        </div>
    )
}

export default Navbar