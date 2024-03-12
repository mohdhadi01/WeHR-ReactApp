import React, { useState } from 'react'
import '../Styling/NavBar.css'
import SearchIcon from '../Assets/SearchIcon.svg'
import notification from '../Assets/NavbarIcons/notification.svg'
import message from '../Assets/NavbarIcons/message.svg'
import downarrow from '../Assets/NavbarIcons/downarrow.svg'
import user from '../Data/user'
import Announcement from '../Data/Announcement'
import threelineIcon from '../Assets/threeLine.svg'

function NavBar({ showSidebar, toggleSidebar }) {
  const [showProfileMenu, setshowProfileMenu] = useState(false);

  const handleProfileMenu = () => {
    setshowProfileMenu(!showProfileMenu);
  };
  const [showNotification, setshowNotification] = useState(false);

  const handleNotification = () => {
    setshowNotification(!showNotification);
  };

  return (
    <div className='nav flex items-center'>
      <div className="addline flex gap-3 cursor-pointer" >
        <img className='threeLineIcon1' onClick={toggleSidebar}  src={threelineIcon} alt="" />
        <div className="inputBar p-3 flex align-middle justify-between border">
          <form action="submit">
            <input type="text" className='Input' placeholder='Search' />
          </form>
          <img className='SearchIcon' src={SearchIcon} alt="" />
        </div>
      </div>
      <div className="rightNavBox ">
        <img onClick={handleNotification} className='notificationIcon cursor-pointer' src={notification} alt="" />
        <img className='cursor-pointer' src={message} alt="" />

        <div className="profile flex text-base gap-1 cursor-pointer" onClick={handleProfileMenu} >
          <img className='avatar rounded-full' src={user.avatar} alt="" />
          <h1 className='name mt-2 ml-2 '>{user.name}</h1>
          <img src={downarrow} alt="" />
        </div>
        {showProfileMenu && (
          <div className="dropdown">
            <h1>Profile</h1>
            <h1>Schedule</h1>
            <h1>Support</h1>
            <h2>Log Out</h2>
          </div>
        )}
        {showNotification && (
          <div className="dropdown">
            {Announcement.map((item) => (<div className='notificationBox '>
              <div className="NotiTextBox flex flex-col w-3/4 gap-1 ">
                <h1>{item.title}</h1>
                <h1 className='timetext text-[10px] text-slate-600 '>{item.time}</h1>
              </div>

            </div>))}
          </div>
        )}
      </div>
    </div>
  )
}

export default NavBar