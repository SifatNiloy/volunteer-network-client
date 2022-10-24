// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAAOKh45wTbUxepx5IW69CvhEXVkqmfrYA",
    authDomain: "volunteer-network-ac38c.firebaseapp.com",
    projectId: "volunteer-network-ac38c",
    storageBucket: "volunteer-network-ac38c.appspot.com",
    messagingSenderId: "950794533833",
    appId: "1:950794533833:web:dc4ee598e86a167e2cc618"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;