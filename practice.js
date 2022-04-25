

var firebaseConfig = {
    apiKey: "AIzaSyB9w-nRG63kk_hbJ7IP43hMl76vJ8QiHTM",
    authDomain: "kwitter-c6d29.firebaseapp.com",
    projectId: "kwitter-c6d29",
    storageBucket: "kwitter-c6d29.appspot.com",
    messagingSenderId: "537970800383",
    appId: "1:537970800383:web:3aa0e1c4db69c8f0fbbeca"
  };
  firebase.initializeApp(firebaseConfig);

  function addUser(){
    user_name= document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}