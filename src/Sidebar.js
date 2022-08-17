import { Avatar } from '@material-ui/core'
import React from 'react'

export default function Sidebar() {

    const recentItem = (topic) => (
        <div className='sidebarRecentItem'>
            <span className='sidebarHash'>#</span>
            <p>{topic}</p>
        </div>
    )

  return (
    <div className='sidebar'>
      <div className='sidebarTop'>
        <img src='https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80' alt='' />
        <Avatar className='sidebarAvatar' />
        <h2>Sonny Sangha</h2>
        <h4>angela.four11@gmail.com</h4>
      </div>

      <div className='sidebarStats'>
        <div className='sidebarStat'>
            <p>Who viewed you</p>
            <p className='sidebarStatNumber'>2,543</p>
        </div>
        <div className='sidebarStat'>
            <p>Views on post</p>
            <p className='sidebarStatNumber'>2,448</p>
        </div>
      </div>

      <div className='sidebarBottom'>
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('softwareengineering')}
        {recentItem('design')}
        {recentItem('developer')}
      </div>
    </div>
  )
}
