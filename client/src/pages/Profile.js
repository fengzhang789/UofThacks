import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import NotLoggedInPage from './NotLoggedin/NotLoggedInPage';

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    
    return (
        <main>
            {isAuthenticated ? (
                <div>
                    <img src={user.profile} alt='user profile pic' />
                </div>
            ): (
                <NotLoggedInPage />
            )}
        </main>
    )
}

export default Profile