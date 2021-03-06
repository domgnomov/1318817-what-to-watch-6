import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app/app';
import {Provider} from "react-redux";
import {createAPI} from "./components/services/api";
import {requireAuthorization} from "./store/action";
import {AuthorizationStatus} from "./const";
import {redirect} from "./store/redirect";
import {checkAuth} from "./store/api-actions";
import {configureStore} from "@reduxjs/toolkit";
import rootReducer from './store/reducer';

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: {
        extraArgument: api
      },
    }).concat(redirect)
});

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App/>,
    </Provider>,
    document.querySelector(`#root`)
);
