import React, { useRef } from 'react';

const Image = () => {
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
    };

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
        <video ref={videoRef} autoPlay></video>
        <button onClick={handleCapture}>Capture</button>
        <canvas ref={canvasRef} width="400" height="300" style={{ display: 'none' }}></canvas>
        <img ref={capturedImageRef} />
        </div>
    );
};

export default Image;