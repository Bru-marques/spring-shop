import { initializeApp } from 'firebase/app'
import { 
    getAuth,
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    } from 'firebase/auth'

import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBcUFaRa-R9n4P4FPuIScHR1xGlZf_rPVI",
    authDomain: "spring-store-e0e38.firebaseapp.com",
    projectId: "spring-store-e0e38",
    storageBucket: "spring-store-e0e38.appspot.com",
    messagingSenderId: "470208784925",
    appId: "1:470208784925:web:55938b29d39674b57a34f4"
  };

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup( auth, googleProvider );
export const signInWithGoogleRedirect = () => signInWithGoogleRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async( userAuth, additionalInformation ={} ) => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    // creates a user if it dosen't existes
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createAt,
                ...additionalInformation
            })
        }
        catch(error) {
            console.log('Create user error: ', error.message);
        }
    }
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async ( email, password ) => {
    if( !email || !password ) return;

    return await createUserWithEmailAndPassword( auth, email, password )
}

export const signInWithAuthUserWithEmailAndPassword = async ( email, password ) => {
    if( !email || !password ) return;

    return await signInWithEmailAndPassword( auth, email, password )
}

export const signOutUser = async () => await signOut(auth);