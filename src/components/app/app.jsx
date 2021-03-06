import React, {useEffect} from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import {Main} from '../main/main';
import {SignIn} from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import {AddReview} from "../add-review/add-review";
import {Player} from "../player/player";
import NotFound from "../not-found/not-found";
import {Film} from "../film/film";
import {useDispatch, useSelector} from "react-redux";
import LoadingScreen from "../loading-screen/loading-screen";
import {fetchFilmList} from "../../store/api-actions";
import {AppRoute} from "../../const";
import {PrivateRoute} from "../private-route/private-route";
import browserHistory from "../../browser-history";

const App = () => {
  const dispatch = useDispatch();
  const {isDataLoaded} = useSelector((state) => state.FILM);

  useEffect(() => {
    if (!isDataLoaded) {
      dispatch(fetchFilmList());
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
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
        <Route exact path="/films/:id/review">
          <AddReview/>
        </Route>
        <Route exact path="/films/:id">
          <Film/>
        </Route>
        <Route exact path="/player/:id">
          <Player/>
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
