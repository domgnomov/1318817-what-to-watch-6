import React, {useRef, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import PlayPause from "./play-pause";
import {setPlayingStatus} from "../../store/action";
import TimeLapse from "./time-lapse";
import {fetchFilm} from "../../store/api-actions";


const Player = () => {
  const {currentFilm} = useSelector((state) => state.FILM);
  const dispatch = useDispatch();

  const videoRef = useRef();
  const history = useHistory();
  const {id} = useParams();
  console.log(`Player rerender`);

  useEffect(() => {
    dispatch(fetchFilm(id));
  }, [id]);

  const film = currentFilm;

  const handlePlayPauseClick = React.useCallback(() => {
    const elem = videoRef.current;
    dispatch(setPlayingStatus(elem.paused));
    if (elem.paused) {
      elem.play();
    } else {
      elem.pause();
    }
  });

  return (
    <>
      <div className="player">
        <video autoPlay ref={videoRef} src={film.videoLink} className="player__video" poster={film.previewImage} />
        <button type="button" className="player__exit" onClick={() => {
          videoRef.current.pause();
          history.push(`/`);
        }}>Exit</button>
        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={30} max={100} />
              <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
            </div>
            <TimeLapse/>
          </div>
          <div className="player__controls-row">
            <button type="button" className="player__play" onClick={handlePlayPauseClick}>
              <PlayPause/>
            </button>
            <div className="player__name">Transpotting</div>
            <button type="button" className="player__full-screen" >
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
