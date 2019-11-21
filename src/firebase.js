//Firebase Configuration
import firebase from 'firebase/app';
import 'firebase/firestore';

//import { firestorePlugin } from 'vuefire'
//Vue.use(firestorePlugin)

const firebaseConfig = {
  apiKey: "AIzaSyDyG3TTCPyIeN7GIirQU3kTCiAv6-710uU",
  authDomain: "agroctrl-4d77e.firebaseapp.com",
  databaseURL: "https://agroctrl-4d77e.firebaseio.com",
  projectId: "agroctrl-4d77e",
  storageBucket: "agroctrl-4d77e.appspot.com",
  messagingSenderId: "576813613968",
  appId: "1:576813613968:web:5804e87ff4a2d527c46915"
}
//Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.database();

