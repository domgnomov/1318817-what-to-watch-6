import React, {useEffect} from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import Main from '../main/main';
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import AddReview from "../add-review/add-review";
import Player from "../player/player";
import NotFound from "../not-found/not-found";
import Film from "../film/film";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import LoadingScreen from "../loading-screen/loading-screen";
import {fetchFilmList} from "../../store/api-actions";
import {AppRoute} from "../../const";
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history";

const App = (props) => {
  const {isDataLoaded, onLoadFilmList} = props;

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadFilmList();
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
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadFilmList: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  isDataLoaded: state.isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFilmList() {
    dispatch(fetchFilmList());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
