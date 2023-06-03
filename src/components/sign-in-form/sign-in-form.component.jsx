import FormInput from 'components/form-input/form-input.component'
import { useState } from 'react'
import { createUserDocumentFromAuth, signInWithGooglePopup, signInWithAuthUserWithEmailAndPassword } from 'utils/firebase.utils'
import './sign-in-styles.scss'
import Button from 'components/button/button.component';

const defaultFormFields ={
    email:'',
    password:'',
}

const SignInForm= () => {
    const [ formFields, setFormFields ] = useState(defaultFormFields)
    const {  email,  password } = formFields

    const handleSubmit= async (event) => {
        event.preventDefault();

        try { 
        const { user } = await signInWithAuthUserWithEmailAndPassword(email, password)

        resetFormFields()
    }
         catch(error) {
            if(error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
                alert('Incorrect credentials')
            }
           console.log('User creation encontered an error', error)
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value}) 
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const SignInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }


    return(
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with email and password</span>
            <form onSubmit={(event) => {handleSubmit(event)}}>
                <FormInput 
                    label='Email'
                    type='email' 
                    required 
                    onChange={handleChange} 
                    name={'email'} 
                    value={email}/>
                <FormInput 
                    label='Password'
                    type='password' 
                    required 
                    onChange={handleChange} 
                    name={'password'} 
                    value={password}/>
                <div className='buttons-container'>
                    <Button type='submit'>Sign In</Button>
                    <Button  type='button' buttonType={'google'} onClick={SignInWithGoogle}>Google sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm