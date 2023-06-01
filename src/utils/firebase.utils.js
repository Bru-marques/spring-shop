import { initializeApp } from 'firebase/app'
import { 
    getAuth,
    signInWithPopup, 
    signInWithRedirect,
    GoogleAuthProvider 
    } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBcUFaRa-R9n4P4FPuIScHR1xGlZf_rPVI",
    authDomain: "spring-store-e0e38.firebaseapp.com",
    projectId: "spring-store-e0e38",
    storageBucket: "spring-store-e0e38.appspot.com",
    messagingSenderId: "470208784925",
    appId: "1:470208784925:web:55938b29d39674b57a34f4"
  };

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);