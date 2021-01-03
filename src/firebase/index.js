import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp(
    {
        apiKey: "AIzaSyCTQiv8rFXgYciEQ3QNgEUwPOh8tyuz3Bw",
        authDomain: "scs-store-7bf88.firebaseapp.com",
        projectId: "scs-store-7bf88",
        storageBucket: "scs-store-7bf88.appspot.com",
        messagingSenderId: "460208913747",
        appId: "1:460208913747:web:133d6c5d4c6ea3a15e75a6",
        measurementId: "G-RZS1PS53Q7"
    }
)

export const getFirebase = () => {
    return app;
}

// Para llamar a la base de datos
export const getFirestore = () => {
    return firebase.firestore();
}