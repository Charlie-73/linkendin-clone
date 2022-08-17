import { Avatar } from '@material-ui/core'
import React from 'react'

export default function HeaderOption({ avatar, Icon, title, onClick }) {
  return (
    <div onClick={onClick} className='headerOption'>
      {Icon && <Icon className='headerOptionIcon' />}
      {avatar && (
        <Avatar className='headerOptionIcon' src={avatar} />
      )}
      <h3 className='headerOptionTitle'>{title}</h3>
    </div>
  )
}
