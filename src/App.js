import React, { useEffect } from 'react'
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux'
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';
import { useDispatch } from 'react-redux'

function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }))
      } else {
        dispatch(logout())
      }
    })
  }, [])

  return (
    <div className='app'>
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className='appBody'>
          <Sidebar />
          <Feed />
        </div>
      )}
      
    </div>
  );
}

export default App;
