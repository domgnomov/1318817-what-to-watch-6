import React, {useRef, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import PlayPause from "./play-pause";
import TimeLapse from "./time-lapse";
import PlayerToggler from "./player-toggler";
import {format} from "../../utils/date";
import {useDispatch, useSelector} from "react-redux";
import {AppRoute, DEFAULT_FILM} from "../../const/const";
import {fetchFilm} from "../../store/api-actions";


const Player = () => {
  const [togglerProgress, setTogglerProgress] = useState(0);
  const [timeLapse, setTimeLapse] = useState(``);
  const [isPlaying, setIsPlaying] = useState(false);
  const [previousTime, setPreviousTime] = useState(0);
  const {currentFilm} = useSelector((state) => state.FILM);
  const film = currentFilm;

  const dispatch = useDispatch();

  const {id} = useParams();

  const videoRef = useRef();
  const history = useHistory();

  if (currentFilm === DEFAULT_FILM) {
    dispatch(fetchFilm(id));
  }

  const playPauseClickHandler = () => {
    const elem = videoRef.current;
    setIsPlaying(!elem.paused);
    if (elem.paused) {
      elem.play();
    } else {
      elem.pause();
    }
  };

  const fullscreenClickHandler = (evt) => {
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

  const timeUpdateHandler = () => {
    const duration = videoRef.current.duration;
    const currentTime = videoRef.current.currentTime;
    const time = Math.floor((duration - currentTime) % 60);
    if (previousTime !== time) {
      setPreviousTime(time);
      setTimeLapse(format(duration - currentTime));
    }
    const progress = Math.round((currentTime / duration * 100) * 100) / 100;
    setTogglerProgress(progress);
  };

  const playPauseHandler = () => {
    setIsPlaying(!videoRef.current.paused);
  };

  return (
    <>
      <div className="player">
        <video autoPlay ref={videoRef} src={film.videoLink} className="player__video" poster={film.previewImage} onPause={playPauseHandler} onPlay={playPauseHandler} onTimeUpdate={timeUpdateHandler}/>
        <button type="button" className="player__exit" onClick={() => {
          videoRef.current.pause();
          history.push(AppRoute.ROOT);
        }}>Exit</button>
        <div className="player__controls">
          <div className="player__controls-row">
            <PlayerToggler togglerProgress={togglerProgress}/>
            <TimeLapse timeLapse={timeLapse}/>
          </div>
          <div className="player__controls-row">
            <button type="button" className="player__play" onClick={playPauseClickHandler}>
              <PlayPause isPlaying={isPlaying}/>
            </button>
            <div className="player__name">Transpotting</div>
            <button type="button" className="player__full-screen" onClick={fullscreenClickHandler}>
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
