// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { boot } from 'quasar/wrappers'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDtjRJRfhH1NJ-jd0_TIs8Rx0JwtoO_Q2o',
  authDomain: 'mgyone-personalpage.firebaseapp.com',
  projectId: 'mgyone-personalpage',
  storageBucket: 'mgyone-personalpage.appspot.com',
  messagingSenderId: '171630886500',
  appId: '1:171630886500:web:7be15ac64ddc846e78e971',
  measurementId: 'G-ETB0WMQXV4'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$firebase = app
  // ^ ^ ^ this will allow you to use this.$firebase (for Vue Options API form)
  //       so you won't necessarily have to import firebase in each vue file

  app.config.globalProperties.$analytics = analytics
  // ^ ^ ^ this will allow you to use this.$analytics (for Vue Options API form)
  //       so you won't necessarily have to import firebase analytics in each vue file
})
