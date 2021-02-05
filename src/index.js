import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const film = {
  name: `We need to talk about Kevin`,
  genre: `Comedy`,
  year: 2020
};

ReactDOM.render(
    <App
      film={film}
    />,
    document.querySelector(`#root`)
);
