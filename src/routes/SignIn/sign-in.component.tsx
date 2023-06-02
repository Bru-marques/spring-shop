import SignUpForm from "components/sign-up-form/sign-up-form.component";
import React from "react"
import { createUserDocumentFromAuth, 
    signInWithGooglePopup } from "utils/firebase.utils";
const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    return (
        <>
         <h3>Sign In Page</h3>
         <button onClick={logGoogleUser}>
            Sign in with Google Popup
         </button>

         <SignUpForm />
        </>
    )
}

export default SignIn