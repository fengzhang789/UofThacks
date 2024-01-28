import React from 'react'
import letter from '../assets/images/letter-bottle.png'
import water from '../assets/images/water.png'

const Water = () => {
    return (
        <>
            <div className='water-page relative flex flex-col justify-evenly w-screen h-screen'>
                <h1 className='text-center text-6xl relative top-24 px-52'>YOUR DRIFT BOTTLE IS DROPPED!</h1>
                <img className='w-screen' src={water} alt='water background'></img>
            </div>
        </>
       
    )
}

export default Water