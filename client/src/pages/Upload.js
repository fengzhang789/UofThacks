import React, { useRef } from 'react';
import { useAuth0 } from '@auth0/auth0-react'
import Flower1 from '../assets/images/flower1.png'
import Flower2 from '../assets/images/flower2.png'

const Upload = () => {
    const {isAuthenticated, isLoading, user} = useAuth0()
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const capturedImageRef = useRef(null);

    const handleCapture = () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

        capturedImageRef.current.src = canvas.toDataURL('image/png');
        const stream = video.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
        video.srcObject = null;
        
        navigator.geolocation.getCurrentPosition((position) => {
            // send post request??
            let date = new Date()
            const createdpost = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    userid: user.email, 
                    img:
                    {
                        data: Buffer,
                        contentType: String
                    },
                    long: position.coords.longitude,
                    lat: position.coords.latitude,
                    date: date,
                    comments: []
                })
            }
            fetch("http://localhost:5000/posts", createdpost).then(result => {
                 console.log(result)
                 // if status of 200 proceed to other ppl's picture/comment page
                 // otherwise produce an error output
            })

            
        }, error);

    };
      
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    const initWebcam = async () => {
        try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });

        if (videoRef.current) {
            videoRef.current.srcObject = stream;
        }
        } catch (error) {
        console.error('Error accessing webcam:', error);
        }
    };

    React.useEffect(() => {
        initWebcam();
        return () => {
            const stream = videoRef.current.srcObject;
            const tracks = stream.getTracks();
            tracks.forEach(track => track.stop());
            videoRef.current.srcObject = null;
        };
    }, []);

    return (
        <div>
        <image src={Flower1}></image>
        <image src={Flower2}></image>
        <h4 className='photo_h4'>Add a photo to your drift bottle!</h4>
        <video ref={videoRef} autoPlay className='camera_screen'></video>
        <button onClick={handleCapture} className='capture_btn'>Capture</button>
        <canvas ref={canvasRef} width="400" height="300" style={{ display: 'none' }}></canvas>
        <img ref={capturedImageRef} />
        </div>
    );
};

export default Upload;