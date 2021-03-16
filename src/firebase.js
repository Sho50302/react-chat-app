import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDOePa6SnRlhnXKAEsiLY5yvPcSR6dQTSQ",
  authDomain: "react-chat-app-916d7.firebaseapp.com",
  projectId: "react-chat-app-916d7",
  storageBucket: "react-chat-app-916d7.appspot.com",
  messagingSenderId: "129457068936",
  appId: "1:129457068936:web:ce802332d570524d05f83d"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messageRef = database.ref('messages');

export const pushMessage = ({ name, text }) => {
  messageRef.push({ name, text });
};
