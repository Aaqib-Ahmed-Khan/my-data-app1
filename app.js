 
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  
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
  console.log('app=>',app);