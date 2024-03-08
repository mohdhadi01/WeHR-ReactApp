import React from 'react'
import SmallCard from '../components/SmallCard'
import MainCard from '../components/mainCard'
import DashboardInfo from '../Data/DashboardInfoCard'
import DashboardMain from '../Data/DashboardMainCard'

import '../Styling/Dashboard.css'
import AnnouncementCard from '../components/AnnouncementCard'
function Dashboard() {
  return (
    <div className='Dashboard'>
      <h1 className='head text-2xl font-semibold my-4 p-2'>Dashboard</h1>
      <div className="smallboxContainer flex">
        {DashboardInfo.map((item) => (<>
          <SmallCard item={item} />
        </>)
        )}
      </div>
      <div className="mainBoxContainer flex mt-6">
        {DashboardMain.map((item) => (<>
          <MainCard item={item} />
        </>)
        )}
      </div>
      <div className="announcementContainer">
      <AnnouncementCard />
      </div>
    </div>
  )
}

export default Dashboard