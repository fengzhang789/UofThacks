import React from 'react';
import './Waves.css'; // Make sure the path is correct
import '../Bottle/Bottle.css'
import Bottle_pic from '../../assets/images/bottle.png'
import Bottle from './Bottle.js'
import {Link} from 'react-router-dom'


const Waves = () => {
  return (
    <div>
      <div className="header">
        <div className="inner-header flex">
          <Link to="/Upload">
            <img src={Bottle_pic} className='waterbottle'></img>
          </Link>
        </div>
        <div className='bg_bottle'>
          
          <h1>loolooloooooo</h1>
        </div>

        <div>
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(255,255,255,0.4)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(255,255,255,0.5)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255,255,255,0.3)"
              />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
      </div>

      <div className="content flex">
        {/* <p>Paragraph here</p> */}
      </div>
    </div>
  );
};

export default Waves;
