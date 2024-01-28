import React from 'react'
import Login from '../components/Login'
import Logout from '../components/Logout'
import { useAuth0 } from '@auth0/auth0-react'

const Navbar = () => {
    const {isAuthenticated, isLoading, user} = useAuth0()

    return (
        <div className='navbar flex flex-row p-8'>
            <header className="w-1/2 text-left">
                ABOT O' WOT
            </header>
            <div  className="w-1/2 text-right">
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