import React from 'react'
import '../Styling/NavBar.css'
import SearchIcon from '../Assets/SearchIcon.svg'
import notification from '../Assets/NavbarIcons/notification.svg'
import message from '../Assets/NavbarIcons/message.svg'
import downarrow from '../Assets/NavbarIcons/downarrow.svg'
import user from '../Data/user'

function NavBar() {
  return (
    <div className='nav flex items-center'>
      <div className="inputBar p-3 flex align-middle justify-between border">
        <form action="submit">
          <input type="text" className='Input' placeholder='Search' />
        </form>
        <img src={SearchIcon} alt="" />
      </div>
      <div className="rightNavBox ">
        <img className='cursor-pointer' src={notification} alt="" />
        <img className='cursor-pointer' src={message} alt="" />

        <div className="profile flex text-base gap-1 cursor-pointer">
          <img className='avatar rounded-full' src={user.avatar} alt="" />
          <h1 className='name mt-2 ml-2 '>{user.name}</h1>
          <img src={downarrow} alt="" />
        </div>
      </div>
    </div>
  )
}

export default NavBar