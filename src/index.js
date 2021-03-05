import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {applyMiddleware, createStore} from "redux";
import {reducer} from "./store/reducer";
import {Provider} from "react-redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";
import {createAPI} from "./components/services/api";
import {requireAuthorization} from "./store/action";
import {AuthorizationStatus} from "./const";
import {redirect} from "./store/redirect";
import {checkAuth} from "./store/api-actions";

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect)
));

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App/>,
    </Provider>,
    document.querySelector(`#root`)
);
