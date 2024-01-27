import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import NotLoggedInPage from './NotLoggedInPage';

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    
    return (
        <main>
            {isAuthenticated ? (
                <div className='py-5 px-5 flex flex-col items-center'>
                    <h1 className='pb-5 text-center text-3xl'>Welcome, {user.name}</h1>
                    <img className='rounded-full w-1/2 mb-5 sm:w-2/6 lg:w-1/6 2xl:max-w-52' src={user.picture} alt='profile icon'></img>
                    <h2 className='text-2xl'>Stats</h2>
                    <div className='inline-flex flex-row flex-wrap gap-x-6 justify-center items-center'>
                        <p>Bottles Sent: 5</p>
                        <p>Bottles Received: 0</p>
                        <p>Commented Bottles: 5</p>
                    </div>
                    
                    {/* REPLACE LATER WITH REAL DATA */}
                    <div className='image-container flex flex-row flex-wrap gap-x-10 justify-center'>
                        <div className='py-8'>
                            <h3 className=''>Image</h3>
                            <img src='https://www.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg' alt='bottled card'></img>
                            <p>Date Taken: 2024-01-27 at 13:37 PM</p>
                            <p>Location: Waterloo, Ontario, Canada</p>
                        </div>

                        <div className='py-8'>
                            <h3 className=''>Image</h3>
                            <img src='https://www.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg' alt='bottled card'></img>
                            <p>Date Taken: 2024-01-27 at 13:37 PM</p>
                            <p>Location: Waterloo, Ontario, Canada</p>
                        </div>
                        
                        <div className='py-8'>
                            <h3 className=''>Image</h3>
                            <img src='https://www.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg' alt='bottled card'></img>
                            <p>Date Taken: 2024-01-27 at 13:37 PM</p>
                            <p>Location: Waterloo, Ontario, Canada</p>
                        </div>
                    </div>
                </div>
            ) : (
                <NotLoggedInPage />
            )}
        </main>
    )
}

export default Profile