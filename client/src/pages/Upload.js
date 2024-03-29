import React, { useRef, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react'
import Flower1 from '../assets/images/flower1.png'
import Flower2 from '../assets/images/flower2.png'
import axios from 'axios'
import { useNavigate, Link } from "react-router-dom";

const Upload = () => {
    const navigate = useNavigate();
    const {isAuthenticated, isLoading, user} = useAuth0()
    const [fetchedData, setFetchedData] = useState(null)
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const capturedImageRef = useRef(null);

    const handleCapture = async () => {
        if (videoRef.current) {
            const video = videoRef.current;
            const canvas = canvasRef.current;
            canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    
            const convertToBlob = async () => {
                return new Promise(resolve => {
                    canvas.toBlob(blob => resolve(blob));
                });
            }
        
            const IMAGE = await convertToBlob();
            const formData = new FormData();
            const fileReader = new FileReader();
            fileReader.readAsDataURL(IMAGE)
    
    
            function getCurrentPosition() {
                return new Promise((resolve, reject) => {
                  navigator.geolocation.getCurrentPosition(
                    position => resolve(position),
                    error => reject(error)
                  );
                });
            }

            function generateRandomFutureDate() {
                const currentDate = new Date();
                let multiplier = 1;
                if(Math.random() > 0.5) {
                    multiplier = -1;
                } else {
                    multiplier = 1;
                }

                const randomDays = (Math.floor(Math.random() * 365) + 1) * multiplier;
            
                // Calculate the future date by adding the random number of days to the current date
                const futureDate = new Date(currentDate);
                futureDate.setDate(currentDate.getDate() + randomDays);
                
                console.log(multiplier)
                return futureDate;
            }
            
            let randomDate = generateRandomFutureDate()
            
            
            fileReader.onload = async () => {
                const position = await getCurrentPosition();
        
                const latstr = position.coords.latitude.toString();
                const longstr = position.coords.longitude.toString();
    
    
                const currDate = new Date()
                
                
                console.log(latstr)
                formData.append('lat', latstr)
                formData.append('long', longstr)
                await formData.append('image', IMAGE, "image.png")
                await formData.append('userid', user.email)
                await formData.append('date', currDate)
                await formData.append('expiryDate', randomDate)
    
    
                fetch("http://localhost:5000/posts", {
                    method: "POST",
                    body: formData,
                }).then(res => res.json())
                .then(res => setFetchedData(res));            
            }
                    
            const stream = video.srcObject;
            const tracks = stream.getTracks();
            tracks.forEach(track => track.stop());
            video.srcObject = null;
            
            navigate("/comments");   
        }

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
            const stream = videoRef.current?.srcObject;
            if (stream) {
                const tracks = stream.getTracks();
                tracks.forEach(track => track.stop());
                videoRef.current.srcObject = null;
            }
        };
    }, []);

    return (
        <div>
            {/* <img src={Flower1}></img>
            <img src={Flower2}></img> */}
            <h4 className='photo_h4'>Add a photo to your drift bottle!</h4>
            <video ref={videoRef} autoPlay className='camera_screen'></video>
             
            <button onClick={handleCapture} className='capture_btn'>Capture</button>
            
            <canvas ref={canvasRef} width="400" height="300" style={{ display: 'none' }}></canvas>
            {/* <img ref={capturedImageRef} /> */}
            {/* {fetchedData && (
                <img src={fetchedData} ></img>
            )} */}
        </div>
    );
};

export default Upload;