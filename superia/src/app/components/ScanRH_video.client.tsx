'use client'
import React, { useState } from 'react';
export const useClient = true;  // This ensures the component is handled as a client component in Next.js

const ScanRH = () => {
    // State to manage visibility of image and video
    const [showVideo, setShowVideo] = useState(false);

    const handleClick = () => {
        setShowVideo(true); // Set the video to show
    };

    return (
        <div className="scanrh-container">
            {!showVideo && (
                <img
                    src="ScanRH.JPG"
                    alt="ScanRH"
                    className="scanrh-image w-64 "
                    onClick={handleClick}
                />
            )}
            {showVideo && (
                <video id="scanRHVideo" width="1080" controls autoPlay muted>
                    <source src="video_scanrh.mp4" type="video/mp4" />
                    Votre navigateur ne supporte pas cette vidéo.
                </video>
            )}
        </div>
    );
};

export default ScanRH;
