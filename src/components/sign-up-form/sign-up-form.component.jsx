import FormInput from 'components/form-input/form-input.component'
import { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from 'utils/firebase.utils'
import './sign-up-styles.scss'
import Button from 'components/button/button.component'

const defaultFormFields ={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}

const SignUpForm= () => {
    const [ formFields, setFormFields ] = useState(defaultFormFields)
    const { displayName, email,  password, confirmPassword } = formFields

    

    const handleSubmit= async (event) => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert('Password dos not macth')
            return;
        }

        try { 
        await createAuthUserWithEmailAndPassword(email, password)
         
        resetFormFields()
    }
         catch(error) {
            if( error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use')
            }
            else {
                console.log('User creation encontered an error', error)
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormFields({ ...formFields, [name]: value}) 
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }


    return(
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with email and password</span>
            <form onSubmit={(event) => {handleSubmit(event)}}>
               
                <FormInput 
                     label='Display Name'
                    type='text' 
                    required 
                    onChange={handleChange} 
                    name={'displayName'} 
                    value={displayName}/>
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
                <FormInput
                    label='onfirm your password'
                    type='password' 
                    required 
                    onChange={handleChange} 
                    name={'confirmPassword'} 
                    value={confirmPassword}/>

                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm