import React, {useEffect} from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import {Main} from '../main/main';
import {SignIn} from "../sign-in/sign-in";
import MyList from "../film-list/my-list";
import {AddReview} from "../add-review/add-review";
import {Player} from "../player/player";
import NotFound from "../not-found/not-found";
import {Film} from "../film/film";
import {useDispatch, useSelector} from "react-redux";
import LoadingScreen from "../loading-screen/loading-screen";
import {fetchFilmList, fetchPromo} from "../../store/api-actions";
import {AppRoute} from "../../const/const";
import {PrivateRoute} from "../private-route/private-route";
import browserHistory from "../../services/browser-history";
import {LoginRoute} from "../login-route/login-route";
import NotAvailable from "../not-available/not-available";

const App = () => {
  const {isDataLoaded, allFilms, promoFilm} = useSelector((state) => state.FILM);
  const {serverError} = useSelector((state) => state.ERROR);

  const dispatch = useDispatch();

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
        <Route exact path={AppRoute.ROOT}>
          <Main film={promoFilm}/>
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
        <Route exact path={AppRoute.FILM}>
          <Film/>
        </Route>
        <Route exact path={AppRoute.PLAYER}>
          <Player />
        </Route>
        <Route exact path={AppRoute.NOT_AVAILABLE}>
          <NotAvailable />
        </Route>
        <Route exact path={AppRoute.NOT_FOUND}>
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
