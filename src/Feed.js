import React, { useEffect, useState } from 'react'
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase/compat/app'

export default function Feed() {

    const [posts, setPosts] = useState([])
    const [input, setInput] = useState('')

    useEffect(() => {
        db.collection('posts')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        ))
    }, [])

    const sendPost = (e) => {
        e.preventDefault()

        db.collection('posts').add({
            name: 'angela',
            description: 'this is test',
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput('')
    }

  return (
    <div className='feed'>
      <div className='feedInputContainer'>
        <div className='feedInput'>
            <CreateIcon />
            <form>
                <input type='text' value={input} onChange={e => setInput(e.target.value)} />
                <button type='submit' onClick={sendPost}>Send</button>
            </form>
        </div>
        <div className='feedInputOptions'>
            <InputOption title='Photo' Icon={ImageIcon} color='#70b5f9' />
            <InputOption title='Video' Icon={SubscriptionsIcon} color='#e7a33e' />
            <InputOption title='Event' Icon={EventNoteIcon} color='#c0cbcd' />
            <InputOption title='Write article' Icon={CalendarViewDayIcon} color='#7fc15e' />
        </div>
      </div>

        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
            <Post
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
            />
        ))}

      <Post name='Angela' description='This is a test' message='WOW this worked' />
    </div>
  )
}
