/** @jsx h */
import { render, h } from 'preact'
import firebase from 'firebase'

import App from './compos/App'

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyCGThJ7PomZDD9K7C82jjzYBQw_yJTqxRI',
  authDomain: 'pigisland-52edc.firebaseapp.com',
  databaseURL: 'https://pigisland-52edc.firebaseio.com',
  storageBucket: 'pigisland-52edc.appspot.com',
}
firebase.initializeApp(config)

render(<App />, document.body)
