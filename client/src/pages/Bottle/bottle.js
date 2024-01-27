import React from 'react'
import '../Bottle/bottle.css'
import Bottle_pic from '../../assets/images/bottle.png'
import {Link} from 'react-router-dom'


export const Bottle = () => {
  return (
    <div className='bg_bottle'>
      <Link>
      <img src={Bottle_pic} className='waterbottle'></img>
      </Link>
      
    </div>
  )
}

export default Bottle
