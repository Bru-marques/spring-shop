import SignInForm from "components/sign-in-form/sign-in-form.component";
import SignUpForm from "components/sign-up-form/sign-up-form.component";
import React from "react"

const Authentication = () => {
    return (
        <>
         <h3>Sign In Page</h3>
         <SignInForm />
         <SignUpForm />
        </>
    )
}

export default Authentication