import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import NotLoggedInPage from './NotLoggedInPage';

// THIS IS THE PAGE WHERE THE USER TAKES AND UPLOADS THEIR PHOTO
const Upload = () => {
    const {isAuthenticated} = useAuth0();
    
    return (
        <>
            {isAuthenticated ? (
                <div>
                    <input ></input>
                </div>
            ): (
                <NotLoggedInPage />
            )}
        </>
        
    )
}

export default Upload