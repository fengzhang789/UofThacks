import {React, useState} from 'react'
import '../components/Memory.css'

function Memory({picid, pic, date, location}) {
    const [comment, setComment] = useState('')

    const addComment = (e) => {
        e.preventDefault()
        console.log('comment submitted', e.target)
        const comment = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                comments: e.target.value
            })
        }
        fetch(`http://localhost:5000/${picid}`, comment).then(result => {
            console.log("comment saved")
            console.log(result)
        })
        setComment = '';
    }

    const handleChange = (event) => {
        setComment(event.target.value)
    }

    return (
        <div>
            <div className='memo py-8'>
                <h3 className='info'>Memory captured on: {date}</h3>
                <img src= 'https://www.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg' className = 'pic_frame' alt='picture'></img>
                <form className= 'form' onSubmit={addComment}>
                    <input className = 'inp' type="text" value={comment} onChange={handleChange}/>
                    <button className = 'but' type="submit">comment</button>
                </form>
            </div>
        </div>
        
    )
}

export default Memory