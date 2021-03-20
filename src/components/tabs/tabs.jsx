import React, {useState} from 'react';
import {FilmValidation} from "../../validation/validation";
import FilmReviews from "../film-reviews/film-reviews";
import Tab from "./tab";
import FilmOverview from "../film-overview/film-overview";
import FilmDetails from "../film-details/film-details";
import {TabType} from "../../const/const";


const Tabs = (props) => {
  const [activeTabId, setActiveTabId] = useState(TabType.OVERVIEW);
  const {film} = props;

  const getTabContainer = () => {
    switch (activeTabId) {
      case TabType.DETAILS:
        return <FilmDetails film={film} />;
      case TabType.REVIEWS:
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
              Object.keys(TabType).map((name, id) => (<Tab key={id} name={name} id={TabType[name]} activeTabId={activeTabId} setActiveTabId={setActiveTabId}/>))
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
