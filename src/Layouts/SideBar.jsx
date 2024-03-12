import React, { useState } from 'react';
import dashboard from '../Assets/SidebarIcons/dashboard.svg';
import Recruitment from '../Assets/SidebarIcons/Recruitment.svg';
import Schedule from '../Assets/SidebarIcons/Schedule.svg';
import Employee from '../Assets/SidebarIcons/Employee.svg';
import Department from '../Assets/SidebarIcons/department.svg';
import Support from '../Assets/SidebarIcons/Support.svg';
import Setting from '../Assets/SidebarIcons/Setting.svg';
import threeLineIcon from '../Assets/threeLine.svg'
import Activedashboard from '../Assets/ActiveSidebarIcons/dashboard.svg';
import ActiveRecruitment from '../Assets/ActiveSidebarIcons/Recruitment.svg';
import ActiveSchedule from '../Assets/ActiveSidebarIcons/Schedule.svg';
import ActiveEmployee from '../Assets/ActiveSidebarIcons/Employee.svg';
import ActiveDepartment from '../Assets/ActiveSidebarIcons/department.svg';
import ActiveSupport from '../Assets/ActiveSidebarIcons/Support.svg';
import ActiveSetting from '../Assets/ActiveSidebarIcons/Setting.svg';

function SideBar({ showSidebar, toggleSidebar }) {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <div  className='SideBar bg-white h-screen p-8 border-r-2' style={{ width: showSidebar ? "270px" : "100px" }}>
      <div className="logo-Icon">
        <img onClick={toggleSidebar} src={threeLineIcon} alt="" className='threeLineIcon absolute right-6 cursor-pointer top-8 left-[130px]' style={{ left: showSidebar ? "230px" : "130px" }} />
        <div className="logo text-center">WeHR</div>
      </div>
      <div className="mainMenu">
        <div className="sidebartitle text-xs mt-16 mb-8 text-slate-400 font-medium">MAIN MENU</div>
        <div className="Items flex flex-col gap-6 text-lg text-slate-500 cursor-pointer">
          <div className="Box flex gap-6 " onClick={() => handleItemClick('Dashboard')}>
            <img className='logo' src={activeItem === 'Dashboard' ? Activedashboard : dashboard} alt="" />
            <h1 style={{ display: showSidebar ? "flex" : "none" }} className={`item ${activeItem === 'Dashboard' ? 'text-red-500' : ''}`} onClick={() => handleItemClick('Dashboard')}>Dashboard
            </h1>
          </div>
          <div className="Box flex gap-6" onClick={() => handleItemClick('Recruitment')}>
            <img src={activeItem === 'Recruitment' ? ActiveRecruitment : Recruitment} alt="" />
            <h1 style={{ display: showSidebar ? "flex" : "none" }} className={`item flex gap-6 ${activeItem === 'Recruitment' ? 'text-red-500' : ''}`} onClick={() => handleItemClick('Recruitment')}>Recruitment
            </h1>
          </div>
          <div className="Box flex gap-6" onClick={() => handleItemClick('Schedule')}>
            <img src={activeItem === 'Schedule' ? ActiveSchedule : Schedule} alt="" />
            <h1 style={{ display: showSidebar ? "flex" : "none" }} className={`item flex gap-6 ${activeItem === 'Schedule' ? 'text-red-500' : ''}`} >Schedule
            </h1>
          </div>
          <div className="Box flex gap-6" onClick={() => handleItemClick('Employee')}>
            <img src={activeItem === 'Employee' ? ActiveEmployee : Employee} alt="" />
            <h1 style={{ display: showSidebar ? "flex" : "none" }} className={`item flex gap-6 ${activeItem === 'Employee' ? 'text-red-500' : ''}`} >Employee
            </h1>
          </div>
          <div className="Box flex gap-6" onClick={() => handleItemClick('Department')}>
            <img src={activeItem === 'Department' ? ActiveDepartment : Department} alt="" />
            <h1 style={{ display: showSidebar ? "flex" : "none" }} className={`item flex gap-6 ${activeItem === 'Department' ? 'text-red-500' : ''}`} >Department
            </h1>
          </div>
        </div>
      </div>
      <div className="other">
        <div className="sidebartitle text-xs mt-16 mb-8 text-slate-400 font-medium">OTHER</div>
        <div className="Items flex flex-col gap-6 text-lg text-slate-500 cursor-pointer">
          <div className="Box flex gap-6" onClick={() => handleItemClick('Support')}>
            <img src={activeItem === 'Support' ? ActiveSupport : Support} alt="" />
            <h1 style={{ display: showSidebar ? "flex" : "none" }} className={`item flex gap-6 ${activeItem === 'Support' ? 'text-red-500' : ''}`} >Support
            </h1>
          </div>
          <div className="Box flex gap-6" onClick={() => handleItemClick('Setting')}>
            <img src={activeItem === 'Setting' ? ActiveSetting : Setting} alt="" />
            <h1 style={{ display: showSidebar ? "flex" : "none" }} className={`item flex gap-6 ${activeItem === 'Setting' ? 'text-red-500' : ''}`} >Setting
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
