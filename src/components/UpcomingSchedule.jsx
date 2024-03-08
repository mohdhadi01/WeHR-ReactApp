import React from 'react'
import '../Styling/UpcomingSchedule.css'
import dots from '../Assets/AnnouncementIcons/dots.svg'
import Upcoming from '../Data/Upcoming'
function UpcomingSchedule() {
  return (
    <div>

      <div className='UpcomingCard mt-6'>
        <div className="UpcomingHead flex justify-between">
          <h1 className='Upcomingtitle font-[500]'>Upcoming Schedule</h1>
          <select className='dateSelect' name="date" id="">
            <option value="today"><h1>Today, 13 Sep 2021</h1></option>
            <option value="yesterday"><h1>Tomorrow, 14 Sep 2021</h1></option>
            <option value="2 days ago"><h1>15 Sep 2021</h1></option>
            <option value="3 days ago"><h1> 16 Sep 2021</h1></option>
          </select>
        </div>


        <div className="UpcomingContentBox flex flex-col gap-2 overflow-y-scroll">
          <h1 className='scheduletype'>Priority</h1>
          {Upcoming.priority.map((item) => (<div className='ActivitynotificationBox justify-between'>
            <div className="NotiTextBox flex flex-col  gap-1 ">
              <h1>{item.title}</h1>
              <h1 className='timetext text-[10px] text-slate-600 '>{item.time}</h1>
            </div>
            <div className="IconBox flex gap-6">
              <img src={dots} alt="" />
            </div>

          </div>))}
          <h1 className='scheduletype'>Others</h1>
          {Upcoming.others.map((item) => (<div className='ActivitynotificationBox justify-between'>
            <div className="NotiTextBox flex flex-col  gap-1 ">
              <h1>{item.title}</h1>
              <h1 className='timetext text-[10px] text-slate-600 '>{item.time}</h1>
            </div>
            <div className="IconBox flex gap-6">
              <img src={dots} alt="" />
            </div>

          </div>))}
        </div>
        <h1 className='text-center text-sm text-red-500 font-[500] pt-[10px]  border-t border-gray-200 cursor-pointer'>See All Announcement</h1>
      </div>

    </div>
  )
}

export default UpcomingSchedule