import React, { useState, useEffect } from 'react'
import SideBar from '../Layouts/SideBar'
import NavBar from '../Layouts/NavBar'
import '../Pages/home.css'
import Dashboard from '../Layouts/Dashboard'
import Schedule from '../Layouts/Schedule'
import '../Styling/responsive.css'
function Home() {
	const [showSidebar, setShowSidebar] = useState(false);
	const toggleSidebar = () => {
		setShowSidebar(!showSidebar);
		console.log(showSidebar)
	};

	useEffect(() => {
		const handleResize = () => {
			setShowSidebar(window.innerWidth >= 1450);
		};
		handleResize();

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div className='Home flex w-[99vw]'>
			<div  style={{ width: showSidebar ? "275px" : "105px", zIndex: "1" }}
			className={`sidebar ${showSidebar ? 'togglesidebar' : ''}`}
			>
				<SideBar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
			</div>
			<div className="MainContainer mb-10" >
				<div className="NavBarContainer" >
					<NavBar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
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