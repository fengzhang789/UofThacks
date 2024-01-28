import React from 'react'
import './Home/Home.css'

const NotLoggedInPage = () => {
    return (
        <div className='flex flex-row w-screen text-center items-center'>
            <h4 className='errormsg'>Login to throw a drift bottle!</h4> 
        </div>
    )
}

export default NotLoggedInPage