import App from '../App';
import firebase from 'firebase/App';

const config = {
  apiKey: 'AIzaSyC6H-T7Zhmx8u2EkIPU0ogqFm3H69VjhsA',
  authDomain: 'chat-web-app-fa5b1.firebaseapp.com',
  databaseURL: 'https://chat-web-app-fa5b1-default-rtdb.firebaseio.com',
  projectId: 'chat-web-app-fa5b1',
  storageBucket: 'chat-web-app-fa5b1.appspot.com',
  messagingSenderId: '5711483936',
  appId: '1:5711483936:web:5b7393f358607e49a71845',
};

const app = firebase.initializeApp(config);
