import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Main from '../main/main';
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import AddReview from "../add-review/add-review";
import Player from "../player/player";
import NotFound from "../not-found/not-found";
import Film from "../film/film";
import {FilmsValidation} from "../validation/validation";

const App = (props) => {
  const {films} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main films={films}/>
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/mylist">
          <MyList films={films}/>
        </Route>
        <Route exact path="/films/:id/review">
          <AddReview film={films[2]}/>
        </Route>
        <Route exact path="/films/:id">
          <Film film={films[2]} films={films}/>
        </Route>
        <Route exact path="/player/:id">
          <Player film={films[2]}/>
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = FilmsValidation;

export default App;
