import { Avatar } from '@material-ui/core'
import React from 'react'
import InputOption from './InputOption'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

export default function Post({ name, description, message, photoUrl }) {
  return (
    <div className='post' >
      <div className='postHeader'>
        <Avatar />
        <div className='postInfo'>
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
      </div>

      <div className='postBody' >
        <p>{message}</p>
      </div>

      <div className='postButtons' >
        <InputOption Icon={ThumbUpAltOutlinedIcon} title='Like' 
        color='gray' />
        <InputOption Icon={ChatOutlinedIcon} title='Comment' color='gray' />
        <InputOption Icon={ShareOutlinedIcon} title='Share' color='gray' />
        <InputOption Icon={SendOutlinedIcon} title='Send' color='gray' />
      </div>
    </div>
  )
}
