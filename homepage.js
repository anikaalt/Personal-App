var firebaseConfig = {
    apiKey: "AIzaSyDnERpcLipciQnTainV_zZdiCOZtLjujzw",
    authDomain: "mpproject-c521f.firebaseapp.com",
    projectId: "mpproject-c521f",
    storageBucket: "mpproject-c521f.appspot.com",
    messagingSenderId: "512590823991",
    appId: "1:512590823991:web:06f1a6caedd373958935b2"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML = "Welcome! " + user_name + " 🙌";

   function logout()
 {
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location = "loginpage.html";
 }
