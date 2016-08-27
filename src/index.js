import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import App from './compos/App';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyCGThJ7PomZDD9K7C82jjzYBQw_yJTqxRI',
  authDomain: 'pigisland-52edc.firebaseapp.com',
  databaseURL: 'https://pigisland-52edc.firebaseio.com',
  storageBucket: 'pigisland-52edc.appspot.com',
};
firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
