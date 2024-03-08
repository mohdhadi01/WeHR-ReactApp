import React, { useState } from 'react'
import TeamMemberData from '../Data/TeamMember'
import userIcon from '../Assets/AddMember/user-01.svg'

function AddTeam() {
    const [teamMembers, setTeamMembers] = useState(TeamMemberData);

    const removeMember = (memberToRemove) => {
        const updatedMembers = teamMembers.filter(item => item.name !== memberToRemove.name);
        setTeamMembers(updatedMembers);
    };   

    const addMember = (selectedMemberName) => {
        const isMemberAlreadyAdded = teamMembers.some(member => member.name === selectedMemberName);
    
    // If the selected member is not already added, add it to the teamMembers array
    if (!isMemberAlreadyAdded) {
        const selectedMember = TeamMemberData.find(member => member.name === selectedMemberName);
        if (selectedMember) {
            setTeamMembers([...teamMembers, selectedMember]);
        }
    }
    };

    return (
        <div>
            <div className="showTeamBox flex flex-col gap-3 pr-3 mb-6">
                {
                    teamMembers.map((item) => (<div className='ShowTeam flex gap-4'>
                        <img src={item.profile} alt="" />
                        <div className="UsertextDetail">
                            <h1 className='text-[#344054] font-[600] text-[14px]'>{item.name}</h1>
                            <h1 className='text-[#475467] text-[13px] font-[400]'>{item.email}</h1>
                        </div>
                        <h1 className='text-[#B42318] font-[600] mt-2 ml-[auto] cursor-pointer text-[14px]' onClick={() => removeMember(item)}>Remove</h1>
                    </div>))
                }
            </div>
            <h1 className='text-[14px] mb-2 text-[#344054]'>Team member</h1>
            <div className="selectBar flex items-center gap-3 pl-3">
                <img className='h-[20px]' src={userIcon} alt="" />
                <select className='teamSelect w-[90%] ' name="AddMember" id="" onChange={(e) => addMember(e.target.value)}>
                    <option value="" disabled selected>Select team member</option>
                    {TeamMemberData.map((member, index) => (
                        <option key={index} value={member.name}>{member.name} - {member.title}</option>
                    ))}
                </select>
                <img src="" alt="" />
            </div>
        </div>
    )
}

export default AddTeam