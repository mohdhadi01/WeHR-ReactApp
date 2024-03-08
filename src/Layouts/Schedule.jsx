import React from 'react'
import RecentActivity from '../components/RecentActivity'
import UpcomingSchedule from '../components/UpcomingSchedule'

function Schedule() {
  return (
    <div className='ScheduleContainer'>
        <RecentActivity/>
        <UpcomingSchedule/>
    </div>
  )
}

export default Schedule