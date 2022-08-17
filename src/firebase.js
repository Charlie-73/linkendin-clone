import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCRcorLhK8bJwVLhn3QApGiowimqaVli8o",
    authDomain: "linkedin-cfc02.firebaseapp.com",
    projectId: "linkedin-cfc02",
    storageBucket: "linkedin-cfc02.appspot.com",
    messagingSenderId: "876564476689",
    appId: "1:876564476689:web:22c545dbb4f6c2d14b92b0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }