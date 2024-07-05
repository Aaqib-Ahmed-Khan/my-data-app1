 
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
 import { getAuth,onAuthStateChanged,createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
  const firebaseConfig = {
    apiKey: "AIzaSyAa-W298u62LiPhanNZ134EjcEVYhoVR6c",
    authDomain: "my-first-project-ca126.firebaseapp.com",
    projectId: "my-first-project-ca126",
    storageBucket: "my-first-project-ca126.appspot.com",
    messagingSenderId: "974365332473",
    appId: "1:974365332473:web:6fe23e2a44e0b75789e328",
    measurementId: "G-YXXYX3YZ02"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  //console.log('app=>',app);
  const Analytics=getAnalytics(app);
  const auth = getAuth(app);
  const signup_email=document.getElementById('signup_email')
  const signup_password=document.getElementById('signup_password')
  const signup_btn=document.getElementById('signup_btn')
  signup_btn.addEventListener("click",createUserAccount);
  //console.log("auth=>",auth);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('user is logged in')
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
    } else {
      console.log('user is not logged in')
      // User is signed out
      // ...
    }
  });
  function createUserAccount(){
   // console.log("email=>",signup_email.value);
    // console.log("password=>",signup_password.value);
    createUserWithEmailAndPassword(auth, signup_email.value, signup_password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("User=>",user);

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });

  }
  
