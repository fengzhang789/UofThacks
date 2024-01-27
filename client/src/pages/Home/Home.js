import React from 'react'
import {Link} from 'react-router-dom'
import '../Home/Home.css'



const Home = () => {
    return (
        <div className='bg'>
            <Link to="/Bottle"> 
                <button className='btn'>Throw a drift bottle!</button>
            </Link>
        </div>
    )
}

export default Home