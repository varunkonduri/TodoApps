import * as firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyCleqA5Qrc3K2lkoVI1hX4SxaOxd-ggOyE",
    authDomain: "tasks-97ef4.firebaseapp.com",
    databaseURL:"https://tasks-97ef4-default-rtdb.firebaseio.com/",
    projectId: "tasks-97ef4",
    storageBucket: "tasks-97ef4.appspot.com",
    messagingSenderId: "737781933325",
    appId: "1:737781933325:web:9cf5accd05e65b88f0fc44",
    measurementId: "G-XM6RCMVY1W"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase;