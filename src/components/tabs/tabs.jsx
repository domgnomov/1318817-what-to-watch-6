import React, {useState} from 'react';
import {FilmValidation} from "../validation/validation";
import FilmReviews from "../film-reviews/film-reviews";
import Tab from "./tab";
import FilmOverview from "../film-overview/film-overview";
import FilmDetails from "../film-details/film-details";


const Tabs = (props) => {
  const {film} = props;

  const Type = {
    OVERVIEW: 1,
    DETAILS: 2,
    REVIEWS: 3
  };

  const [activeTabId, setActiveTabId] = useState(Type.OVERVIEW);

  const getTabContainer = () => {
    switch (activeTabId) {
      case Type.DETAILS:
        return <FilmDetails film={film} />;
      case Type.REVIEWS:
        return <FilmReviews film={film} />;
      default:
        return <FilmOverview film={film} />;
    }
  };

  return (
    <>
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {
              Object.keys(Type).map((name, id) => (<Tab key={id} name={name} id={Type[name]} activeTabId={activeTabId} setActiveTabId={setActiveTabId}/>))
            }
          </ul>
        </nav>
        {getTabContainer()}
      </div>
    </>
  );
};

Tabs.propTypes = FilmValidation;

export default Tabs;
