import React from 'react'
import '../Styling/AnnouncementCard.css'
import Announcement from '../Data/Announcement'
import dots from '../Assets/AnnouncementIcons/dots.svg'
import fillPin from '../Assets/AnnouncementIcons/pin-fill.svg';
import pin from '../Assets/AnnouncementIcons/pin.svg';

function AnnouncementCard() {

  return (
    <div className='AnnouncementCard mt-6'>
      <div className="AnnounceHead flex justify-between">
        <h1 className='Announcetitle'>Announcement</h1>
        <select className='dateSelect' name="date" id="">
          <option value="today"><h1>Today, 13 Sep 2021</h1></option>
          <option value="yesterday"><h1>yesterday, 12 Sep 2021</h1></option>
          <option value="2 days ago"><h1>2 days ago, 11 Sep 2021</h1></option>
          <option value="3 days ago"><h1>3 days ago, 10 Sep 2021</h1></option>
        </select>
      </div>
      <div className="ContentBox flex flex-col gap-2">
        {Announcement.map((item) => (<div className='notificationBox '>
          <div className="NotiTextBox flex flex-col w-3/4 gap-1 ">
            <h1>{item.title}</h1>
            <h1 className='timetext text-[10px] text-slate-600 '>{item.time}</h1>
          </div>
          <div className="IconBox flex gap-6">
            {item.pin === "true" ? <img src={fillPin} alt='' /> : <img src={pin} alt='' />}
            <img src={dots} alt="" />
          </div>

        </div>))}
      </div>
      <h1 className='text-center text-sm text-red-500 font-[500] p-2 border-t border-gray-200 cursor-pointer'>See All Announcement</h1>
    </div>
  )
}

export default AnnouncementCard;