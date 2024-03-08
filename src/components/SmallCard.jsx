import React from 'react'
import '../Styling/smallcard.css'

function SmallCard(props) {
    const item = props.item;

    return (
        <div style={{ backgroundColor: `${ item.color }` }} className='smallCard flex flex-col '>
            <h1 className='status'>{item.status}</h1>
            <h1 className='number '>{item.numbers}</h1>
            <h1 style={{ color: `${item.textColor}` }} className='urgent text-base'>{item.urgent}</h1>
        </div >
    )
}

export default SmallCard