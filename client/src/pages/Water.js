import React from 'react'
import letter from '../assets/images/letter-bottle.png'
import water from '../assets/images/water.png'

const Water = () => {
    return (
        <>
            <img className='absolute ' src={letter} alt='letter bottle'></img>
            <div className='water-page relative flex flex-col justify-end w-screen h-3/4'>
                <h1 className='text-center '>YOUR DRIFT BOTTLE IS DROPPED!</h1>
                <img className='w-full h-fit' src={water} alt='water background'></img>
            </div>
        </>
       
    )
}

export default Water