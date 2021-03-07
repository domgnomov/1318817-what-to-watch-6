import React, {useRef} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import PlayPause from "./play-pause";
import {setPlayingStatus} from "../../store/action";


const Player = () => {
  const {allFilms} = useSelector((state) => state.FILM);
  const videoRef = useRef();
  const history = useHistory();
  const dispatch = useDispatch();

  const {id} = useParams();
  const film = allFilms.find((obj) => obj.id.toString() === id);

  const handleFullscreenClick = (evt) => {
    evt.preventDefault();
    const elem = videoRef.current;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  };

  const handlePlayPauseClick = () => {
    const elem = videoRef.current;
    dispatch(setPlayingStatus(elem.paused));
    if (elem.paused) {
      elem.play();
    } else {
      elem.pause();
    }
  };

  return (
    <>
      <div className="player">
        <video autoPlay ref={videoRef} src={film.videoLink} className="player__video" poster={film.previewImage} />
        <button type="button" className="player__exit" onClick={() => history.push(`/`)}>Exit</button>
        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={30} max={100} />
              <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
            </div>
            <div className="player__time-value">1:30:29</div>
          </div>
          <div className="player__controls-row">
            <button type="button" className="player__play" onClick={handlePlayPauseClick}>
              <PlayPause/>
            </button>
            <div className="player__name">Transpotting</div>
            <button type="button" className="player__full-screen" onClick={handleFullscreenClick}>
              <svg viewBox="0 0 27 27" width={27} height={27}>
                <use xlinkHref="#full-screen" />
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export {Player};
