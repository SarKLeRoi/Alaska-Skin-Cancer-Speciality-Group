import React from "react";

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay playsInline muted loop preload="auto">
        <source src="/videos/HomeVideo.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      {/* You can add content here that will be displayed on top of the video */}
      {/* <div className="content">
        <h1>Heading Text</h1>
        <p>This is a description text over the video background.</p>
      </div> */}
    </div>
  );
};

export default VideoBackground;
