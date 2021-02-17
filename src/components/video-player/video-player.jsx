import React from 'react';

const VideoPlayer = (props) => {
  const {film} = props;

  return (
    <>
      <video autoPlay={true} muted={true} controls width="280" height="175">
        <source src={film.previewVideoLink} type="video/mp4"/>
      </video>
    </>
  );
};

export default VideoPlayer;
