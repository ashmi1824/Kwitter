
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9w-nRG63kk_hbJ7IP43hMl76vJ8QiHTM",
  authDomain: "kwitter-c6d29.firebaseapp.com",
  databaseURL: "https://kwitter-c6d29-default-rtdb.firebaseio.com",
  projectId: "kwitter-c6d29",
  storageBucket: "kwitter-c6d29.appspot.com",
  messagingSenderId: "537970800383",
  appId: "1:537970800383:web:3aa0e1c4db69c8f0fbbeca"
};

// Initialize Firebase
 app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome"+ user_name;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
    console.log("room name"+ Room_names);
    row="<div class='room_name' id="+ Room_names +" onclick='redirectTo_roomName(this.id)' >#"+Room_names+"</div>"
    document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function addRoom(){
    room_name= document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
    });
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}

function redirectTo_roomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function Logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

