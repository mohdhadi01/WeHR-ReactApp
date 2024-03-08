import React from 'react'
import SideBar from '../Layouts/SideBar'
import NavBar from '../Layouts/NavBar'
import '../Pages/home.css'
import Dashboard from '../Layouts/Dashboard'
import Schedule from '../Layouts/Schedule'
import '../Styling/responsive.css'
function Home() {
	return (
		<div className='Home flex w-screen'>
			<div className="sidebar">
				<SideBar />
			</div>
			<div className="MainContainer mb-10">
				<div className="NavBarContainer">
				<NavBar />
				</div>
				<div className="MainBox flex ">
					<div className="midContainer">
						<Dashboard />
					</div>
					<div className="Schedule pt-[90px] flex flex-col items-center">
						<Schedule />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home