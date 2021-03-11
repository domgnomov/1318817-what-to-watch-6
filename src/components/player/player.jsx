import React, {useRef, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import PlayPause from "./play-pause";
import {setPlayingProgress, setPlayingStatus, setPlayingTime} from "../../store/action";
import TimeLapse from "./time-lapse";
import {fetchFilm} from "../../store/api-actions";
import PlayerToggler from "./player-toggler";


const Player = () => {
  const {currentFilm} = useSelector((state) => state.CURRENT_FILM);
  const dispatch = useDispatch();

  const videoRef = useRef();
  const history = useHistory();
  const {id} = useParams();

  const film = currentFilm;
  let lastTime = 0;

  useEffect(() => {
    dispatch(fetchFilm(id));
  }, [id]);

  const handlePlayPauseClick = () => {
    const elem = videoRef.current;
    dispatch(setPlayingStatus(elem.paused));
    if (elem.paused) {
      elem.play();
    } else {
      elem.pause();
    }
  };

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

  const timeUpdateHandler = () => {
    const time = Math.floor((videoRef.current.duration - videoRef.current.currentTime) % 60);
    if (lastTime !== time) {
      lastTime = time;
      dispatch(setPlayingTime(format(videoRef.current.duration - videoRef.current.currentTime)));
      const progress = Math.round((videoRef.current.currentTime / videoRef.current.duration * 100) * 100) / 100;
      dispatch(setPlayingProgress(progress));
    }
  };

  function format(s) {
    let h = Math.floor(s / 60 / 60);
    h = (h >= 10) ? h : `0` + h;
    let m = Math.floor(s / 60);
    m = (m >= 10) ? m : `0` + m;
    s = Math.floor(s % 60);
    s = (s >= 10) ? s : `0` + s;
    return h + `:` + m + `:` + s;
  }

  return (
    <>
      <div className="player">
        <video autoPlay ref={videoRef} src={film.videoLink} className="player__video" poster={film.previewImage}/>
        <button type="button" className="player__exit" onClick={() => {
          videoRef.current.pause();
          history.push(`/`);
        }}>Exit</button>
        <div className="player__controls">
          <div className="player__controls-row">
            <PlayerToggler/>
            <TimeLapse/>
          </div>
          <div className="player__controls-row">
            <button type="button" className="player__play">
              <PlayPause/>
            </button>
            <div className="player__name">Transpotting</div>
            <button type="button" className="player__full-screen">
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
