import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {fetchFavoriteFilmList} from "../../store/api-actions";
import {FavoriteFilmList} from "../film-list/favorite-film-list";
import Logo from "../logo/logo";
import UserBlock from "../user-block";

const MyList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteFilmList());
  }, []);

  return (
    <>
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo/>
          <h1 className="page-title user-page__title">My list</h1>
          <div className="user-block">
            <UserBlock/>
          </div>
        </header>
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <div className="catalog__movies-list">
            <FavoriteFilmList/>
          </div>
        </section>
        <footer className="page-footer">
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default MyList;
