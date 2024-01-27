import React from 'react'
import {Link} from 'react-router-dom'
import '../Home/Home.css'
import { useAuth0 } from '@auth0/auth0-react';
import NotLoggedInPage from '../NotLoggedInPage';


const Home = () => {
    const { user, isAuthenticated} = useAuth0();

    return (
        <div className='bg'>
            {isAuthenticated ? (
                <div>
                    <Link to="/Bottle"> 
                        <button className='btn'>Throw a drift bottle!</button>
                    </Link>
                </div>
            ): (
                <div>
                    <NotLoggedInPage />
                </div>
                
            )}
            
        </div>
    )
}


export default Home