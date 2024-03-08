import React from 'react'
import '../Styling/maincard.css'
import Uparrow from '../Assets/Graph/Frame 20.svg'
import graphLine from '../Assets/Graph/Vector 2.svg'
import graphShadow from '../Assets/Graph/Vector 3.svg'
function MainCard(props) {
    const item = props.item;

    return (
        <div style={{ backgroundColor: "#FFF" }} className='mainCard flex '>
            <div className="leftbox">
                <h1 className='title'>{item.title}</h1>
                <h1 className='mainNumber '>{item.number}</h1>
                <h1 className='count text-base'>{item.mencount}</h1>
                <h1 className='count text-base mt-1'>{item.womencount}</h1>
            </div>
            <div className="rightbox">
                <div className="graph">
                    <h1 className='arrowcount absolute left-[40%] top-[-18px]'>{item.growth}</h1>
                    <img src={Uparrow} className='arrow absolute left-[40%]' alt="" />
                    <img src={graphLine} className='graphLine absolute' alt="" />
                    <img src={graphShadow} className='graphShadow absolute' alt="" />
                </div>

                <h1 className='countMonth text-base '>{item.growthTime}</h1>
            </div>
        </div >
    )
}


export default MainCard;