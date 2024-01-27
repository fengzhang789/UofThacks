import React from 'react'
import Login from '../components/Login'
import Logout from '../components/Logout'
import { useAuth0 } from '@auth0/auth0-react'

const Navbar = () => {
    const {isAuthenticated, isLoading, user} = useAuth0()

    return (
        <div className='navbar flex flex-row justify-between bg-slate-100 py-8 px-12'>
            <header>
                ABOT O' WOT
            </header>
            <nav>
                {isAuthenticated ? (
                    <Logout />
                ) : (
                    <Login />
                )}
            </nav>
        </div>
    )
}

export default Navbar