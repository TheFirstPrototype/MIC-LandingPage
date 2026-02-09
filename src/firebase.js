// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGb84QYwGD3-VccwcrPU_IeY2veRWB8lw",
  authDomain: "michigan-innovators-coalition.firebaseapp.com",
  projectId: "michigan-innovators-coalition",
  storageBucket: "michigan-innovators-coalition.firebasestorage.app",
  messagingSenderId: "225390195308",
  appId: "1:225390195308:web:33cd91bde433049c42de49",
  measurementId: "G-2N5JB57B9R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);