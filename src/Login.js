import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from './firebase'
import { login } from './features/userSlice'

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [profilePic, setProfilePic] = useState('')
    const dispatch = useDispatch()

    const register = () => {
        if (!name) {
            return alert('Please enter a full name')
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic
            })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName:name,
                    photoURL: profilePic
                }))
            })
        }).catch(error => alert(error))
    }

    const loginToApp = (e) => {
        e.preventDevault()

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profilePic: userAuth.user.photoURL
            }))
        }).catch(error => alert(error))
    }

    return (
        <div className='login'>
            <img src='https://www.freepnglogos.com/uploads/linkedin-logo-transparent-png-25.png' alt='' />

            <form>
                <input type='text' placeholder='Full name (required if registering)' onChange={e => setName(e.target.value)} value={name} />

                <input placeholder='Profile pic URL (optional)' onChange={e => setProfilePic(e.target.value)} value={profilePic} type='text' />

                <input placeholder='Email' onChange={e => setEmail(e.target.value)} value={email} type='email' />

                <input placeholder='Password' onChange={e => setPassword(e.target.value)} value={password} type='password' />

                <button type='submit' onClick={loginToApp}>Sign In</button>
            </form>
            <p>Not a member? 
                <span className='loginRegister' onClick={register}>Register Now</span>
            </p>
        </div>
    )
}
