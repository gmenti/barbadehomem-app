import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDKphJSwCM42BL2noQ6aSR4UXszKUAqnMg',
  authDomain: 'barba-de-homem.firebaseapp.com',
  databaseURL: 'https://barba-de-homem.firebaseio.com',
  projectId: 'barba-de-homem',
  storageBucket: 'barba-de-homem.appspot.com',
  messagingSenderId: '447109259878',
  appId: '1:447109259878:web:31b9a82d94b0beccc6c3a7',
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase;
