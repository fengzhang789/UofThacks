import {React, useState} from 'react'
import '../components/Memory.css'

function Memory({picid, pic, date, location, post, commentingUser}) {
    const [comment, setComment] = useState('')

    const addComment = (e) => {
        e.preventDefault()
        console.log(`comment submitted: ${comment}`)
        const body = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                comments: comment,
                commentingUser: commentingUser.name,
                post: post,
            })
        }
        fetch(`http://localhost:5000/add-comment/${picid}`, body).then(result => {
            console.log("comment saved")
            console.log(result)
        })
        setComment('');
    }

    const handleChange = (event) => {
        setComment(event.target.value)
    }

    return (
        <div>
            <div className='memo py-8'>
                <h3 className='info'>Memory captured on: {date}</h3>
                <img src={pic} className='pic_frame' alt='other people img'></img>
                <form className= 'form' onSubmit={addComment}>
                    <input className ='inp' type="text" value={comment} onChange={handleChange}/>
                    <button className = 'but' type="submit">comment</button>
                </form>
            </div>
        </div>
        
    )
}

export default Memory