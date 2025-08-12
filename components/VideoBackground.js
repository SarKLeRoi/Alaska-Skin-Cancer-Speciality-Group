import React from "react";

const VideoBackground = () => {
  return (
    <section className="video-background" aria-labelledby="hero-video">
      <h2 id="hero-video" className="sr-only">
        Alaska Skin Cancer Specialty Group Introduction Video
      </h2>
      <video
        autoPlay
        playsInline
        muted
        loop
        preload="auto"
        aria-hidden="true"
        role="img"
        aria-label="Background video showcasing Alaska Skin Cancer Specialty Group facilities and care"
      >
        <source src="/videos/HomeVideo.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      {/* You can add content here that will be displayed on top of the video */}
      {/* <div className="content">
        <h1>Heading Text</h1>
        <p>This is a description text over the video background.</p>
      </div> */}
    </section>
  );
};

export default VideoBackground;
