import React from 'react'
import '../Styling/RecentActivity.css'
import Activity from '../Data/Activity'
import '../Styling/PopupCard.css'
import closeIcon from '../Assets/x-close.svg'
import Calender from './Calender'
import AddTeam from './AddTeam'


function RecentActivity() {
	const [isCardOpen, setIsCardOpen] = React.useState(false);
	const [activeOption, setactiveOption] = React.useState("Time");

	const handleScheduleButtonClick = () => {
		setIsCardOpen(true);
	};

	const handleCloseCard = () => {
		setIsCardOpen(false);
	};
	return (
		<div className='ActivityContainer'>
			<h1 className='activityHeading'>Recently Activity</h1>
			<div className="ActivityDetailBox">
				<h1 className='ActivityTime'>{Activity.time}</h1>
				<h1 className='ActivityTitle'>{Activity.title}</h1>
				<h1 className='ActivityDesc'>{Activity.desc}</h1>
			</div>
			<div className="defaultContainer flex">
				<h1 className='text-[14px]'>Schedule a call</h1>
				<button className='ScheduleButton text-[14px]' onClick={handleScheduleButtonClick}>Schedule</button>
			</div>

			{isCardOpen && (
				<div className="popupCard  absolute  left-1/2 translate-y-[-70%] translate-x-[-50%] w-[500px] h-[300px]">
					<button className='closeIcon absolute right-6 top-4' onClick={handleCloseCard}><img src={closeIcon} alt="" /></button>
					<div className="cardContent flex p-[30px] text-black">

						<div className="side1 mr-12 cursor-pointer">
							<div className="option1">
								<h1 onClick={() => setactiveOption("Time")} style={{ color: `${activeOption === "Time" ? "red" : "black"}` }} >Time</h1>
							</div>
							<div className="option2 cursor-pointer">
								<h1 onClick={() => setactiveOption("Date")} style={{ color: `${activeOption === "Date" ? "red" : "black"}` }} >Date</h1>
							</div>
							<div className="option3 cursor-pointer">
								<h1 onClick={() => setactiveOption("Add")} style={{ color: `${activeOption === "Add" ? "red" : "black"}` }} >Add team member</h1>
							</div>
						</div>
						<div className="side2">
							{activeOption === "Time" ?
								<div className="1stDisplay">
									<h1 className='text-[18px] mb-[7px] font-[600]'>Select a time for meeting</h1>
									<h1 className='text-[14px] font-[400] text-[#475467] mb-8'>The following time will be set for the meeting:</h1>
									<div className="inputBox flex gap-2">
										<input className='timebox' type="text" placeholder='0' />
										<input className='timebox' type="text" placeholder='0' />
										<input className='timebox' type="text" placeholder='0' />
										<input className='timebox' type="text" placeholder='0' />
									</div>
									<h1 className='text-[12px] font-[400] text-[#475467] opacity-40 mt-3 mb-8'>time in 24 hr format</h1>
									<button className='timeButton text-[14px] text-white' onClick={() => setactiveOption("Date")}  >Next</button>
								</div>
								: null}


							{activeOption === "Date" ?
								<div className="2ndDisplay">
									<h1 className='text-[18px] mb-[7px] font-[600]'>Select a date for meeting</h1>
									<h1 className='text-[14px] font-[400] text-[#475467] '>The following date will be set for the meeting:</h1>
									<Calender />
									<button className='timeButton text-[14px] text-white ml-4' onClick={() => setactiveOption("Add")} >Next</button>
								</div>
								: null}


							{activeOption === "Add" ?
								<div className="3rdDisplay">
									<h1 className='text-[18px] mb-[7px] font-[600]'>Add team member</h1>
									<h1 className='text-[14px] font-[400] mb-7 text-[#475467] '>The following users have access to this meeting:</h1>



									<AddTeam />


									<button className='timeButton text-[14px] mt-8 text-white'>Confirm</button>
								</div>
								: null}


						</div>
					</div>

				</div>
			)}
		</div>
	)
}

export default RecentActivity