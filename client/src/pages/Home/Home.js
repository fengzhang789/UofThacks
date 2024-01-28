import {Link} from 'react-router-dom'
import '../Home/Home.css'
import { useAuth0 } from '@auth0/auth0-react';
import NotLoggedInPage from '../NotLoggedInPage';
import React, { useEffect, useRef } from 'react';
import island from '../../assets/images/island.png'


const Home = () => {
    const { user, isAuthenticated } = useAuth0();
    const wave1 = useRef(null);
    const wave2 = useRef(null);
    const wave3 = useRef(null);
    const wave4 = useRef(null);
  
    useEffect(() => {
      const handleScroll = () => {
        let value = window.scrollY;
  
        wave1.current.style.backgroundPositionX = 400 + value * 4 + "px";
        wave2.current.style.backgroundPositionX = 300 + value * -4 + "px";
        wave3.current.style.backgroundPositionX = 200 + value * 2 + "px";
        wave4.current.style.backgroundPositionX = 100 + value * -2 + "px";
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
        <>
        <div>
            {isAuthenticated ? (
                <div className='bg'>
                    <img src={island} className="island" alt="island"/>
                    <div className = 'words'>
                        <div className= 'title'> 
                            ABOT O' WAT
                        </div>
                        <div className= 'slogan'>
                            Where you can let your memories drift...
                        </div>
                        <Link to="/Waves"> 
                            <button className='btn'>Throw a memory bottle!</button>
                        </Link>
                    </div>
                </div>
            ): (
                <div>
                    <NotLoggedInPage />
                </div>
            )}
        </div>
      <section>
        <div className="wave" id="wave1" style={{ '--i': 1 }} ref={wave1}></div>
        <div className="wave" id="wave2" style={{ '--i': 2 }} ref={wave2}></div>
        <div className="wave" id="wave3" style={{ '--i': 3 }} ref={wave3}></div>
        <div className="wave" id="wave4" style={{ '--i': 4 }} ref={wave4}></div>
      </section>
      <div className="sec">
        <h2>Store your memories in a digital time capsule</h2>
        <p>
        ABOT O'WAT is a web app that reimagines the concept of messages in bottles.
         Users can capture their memories by taking a photo and store them in virtual "bottles". 
         Bottles are then geotagged and made discoverable to others nearby, who can comment, like, and share the bottle. 
         Then, sometime in the future, your bottle will "wash up" for you to experience the nostalgia of the past. 
         This digital time capsule gives users a unique way to preserve and relieve their favourite memories.
        </p>
      </div>
    </>

    )
}

export default Home