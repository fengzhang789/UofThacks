import React, { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import NotLoggedInPage from './NotLoggedInPage';
import bottle from '../assets/images/letter-bottle.png';


const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [ userData, setUserData ] = useState(null)
    const [read, setRead] = useState(false)

    const fetchData = () => {
        fetch(`http://localhost:5000/profile/${user.email}`, {
            method: "POST",
        }).then(res => res.json()).then(res => setUserData(res))
    }

    if (user !== undefined && read === false) {
        fetchData()
        setRead(true);
    }
        
    
    return (
        <main>
            {isAuthenticated ? (
                <div className='py-5 px-5 flex flex-col items-center'>
                    <h1 className='pb-5 text-center text-3xl'>Welcome, {user.name}</h1>
                    <img className='rounded-full w-1/2 mb-5 sm:w-2/6 lg:w-1/6 2xl:max-w-52' src={user.picture} alt='profile icon'></img>
                    <h2 className='text-2xl'>Stats</h2>
                    {userData && (
                        <div className='inline-flex flex-row flex-wrap gap-x-6 justify-center items-center'>
                            <p>Bottles Sent: {userData.length}</p>
                            <p>Bottles Received: {userData.length - userData.filter((item) => item.expiryDate > item.date).length}</p>
                        </div>
                    )}
                    

                    <div className='flex flex-row flex-wrap gap-x-16 justify-center'>
                        {userData && (
                            userData.map((item, index) => {
                                return (
                                    <div key={index} className='py-8 h-fit'>
                                        <h3 className=''>Past Memory</h3>

                                        {item.expiryDate < item.date ? (
                                            <>
                                                <img src={item.img} alt='bottled card'></img>
                                                <p>Date Taken: {item.date}</p>
                                                <p>Location: {item.lat}, {item.long}</p>
                                                <p>Comments: {item.comments && item.comments.map(com => {
                                                    return (
                                                        <div>
                                                            {com && (
                                                                <>
                                                                    {com.user} says
                                                                    {com.comment}
                                                                </>
                                                            )}
                                                            
                                                        </div>
                                                        )
                                                })}</p>
                                            </>
                                        ) : (
                                            <>
                                                <img className='h-72' src={bottle} alt='bottle with letter inside'></img>
                                            </>
                                        )}
                                        
                                    </div>
                                )
                            })
                        )}
                    </div>
                </div>
            ) : (
                <NotLoggedInPage />
            )}
        </main>
    )
}

export default Profile