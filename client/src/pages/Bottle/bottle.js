import React from 'react'
import '../Bottle/Bottle.css'
import Bottle_pic from '../../assets/images/bottle.png'
import {Link} from 'react-router-dom'
import Upload from '../Upload'


export const Bottle = () => {
  return (
    <div className='bg_bottle'>
      <Link to="/Upload">
      <img src={Bottle_pic} className='waterbottle'></img>
      </Link>
      
    </div>
  )
}

export default Bottle
