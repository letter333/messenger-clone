import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDTEwBC4hxXvMt8GX1D6SwcVTrtuJs5Dy8",
    authDomain: "messenger-clone-498e6.firebaseapp.com",
    projectId: "messenger-clone-498e6",
    storageBucket: "messenger-clone-498e6.appspot.com",
    messagingSenderId: "494361784375",
    appId: "1:494361784375:web:4f10d40acabc9a8dd64fb2",
    measurementId: "G-1KF721V1H1"
})

const db = firebaseApp.firestore()

export default db