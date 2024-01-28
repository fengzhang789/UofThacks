import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import NotLoggedInPage from './NotLoggedInPage';
import Memory from '../components/Memory';


const Comments = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [ postData, setPostData ] = useState(null)
    const [read, setRead] = useState(false)

    const fetchData = () => {
        fetch(`http://localhost:5000/comments/${user.email}`, {
            method: "POST",
        }).then(res => res.json()).then(res => setPostData(res))
    }

    if (isAuthenticated && !read) {
        setRead(!read)
        fetchData();
    }
    
    return (
        <main>
            {isAuthenticated ? (
                <div className='py-5 px-5 flex flex-col items-center'>
                    <h1 className='pb-5 text-center text-3xl'>Past memories made nearby</h1>
                    <div className='inline-flex flex-row flex-wrap gap-x-6 justify-center items-center'>
                        <p>Leave a comment in someone's bottle!</p>
                    </div>
                    
                    <div className='image-container flex flex-row flex-wrap gap-x-10 justify-center'>
                        {postData && (
                            postData.map((item, index) => {
                                return <Memory key={index} post={item} commentingUser={user} picid={item._id} pic={item.img} date={item.date} location={item.location}/>
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

export default Comments