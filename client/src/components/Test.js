import React from 'react'

const Test = () => {
    const handleClick = () => {
        const createdpost = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                userid: "irismo1009@gmail.com",
                long: 127,
                lat: 50
            })
        }
        fetch("http://localhost:5000/posts", createdpost).then(result => {
            console.log("post saved")
            console.log(result)
            // if status of 200 proceed to other ppl's picture/comment page
            // otherwise produce an error output
        })
    }

    return (
        <button onClick={handleClick}>test</button>
    )
}

export default Test