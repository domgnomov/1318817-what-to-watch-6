import React, {useEffect} from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import {Main} from '../main/main';
import {SignIn} from "../sign-in/sign-in";
import MyList from "../lists/my-list";
import {AddReview} from "../add-review/add-review";
import {Player} from "../player/player";
import NotFound from "../info-pages/not-found";
import {Film} from "../film/film";
import {useDispatch, useSelector} from "react-redux";
import LoadingScreen from "../info-pages/loading-screen";
import {fetchFilmList, fetchPromo} from "../../store/api-actions";
import {AppRoute} from "../../const/const";
import {PrivateRoute} from "../route/private-route";
import browserHistory from "../../services/browser-history";
import {LoginRoute} from "../route/login-route";
import NotAvailable from "../info-pages/not-available";

const App = () => {
  const dispatch = useDispatch();
  const {isDataLoaded, allFilms, promoFilm, serverError} = useSelector((state) => state.FILM);

  useEffect(() => {
    if (!isDataLoaded) {
      dispatch(fetchPromo());
      dispatch(fetchFilmList());
    }
  }, [isDataLoaded, serverError]);

  if (!isDataLoaded && !serverError) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/">
          <Main promoFilm={promoFilm}/>
        </Route>
        <LoginRoute
          exact
          path={AppRoute.LOGIN}
          render={() => {
            return (
              <SignIn/>
            );
          }}
        />
        <Route exact path="/login">
          <SignIn/>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MY_LIST}
          render={() => {
            return (
              <MyList/>
            );
          }}
        />
        <PrivateRoute
          exact
          path={AppRoute.REVIEW}
          render={() => {
            return (
              <AddReview allFilms={allFilms}/>
            );
          }}
        />
        <Route exact path="/films/:id">
          <Film/>
        </Route>
        <Route exact path="/player/:id">
          <Player allFilms={allFilms}/>
        </Route>
        <Route exact path="/notAvailable">
          <NotAvailable />
        </Route>
        <Route exact path="/notFound">
          <NotFound />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export {App};
