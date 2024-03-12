import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

function Calender() {
    const [value, setValue] = React.useState(dayjs('2022-04-17'));
    return (
        <div className='CalenderBox'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateCalendar', 'DateCalendar']}>

                    <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />

                </DemoContainer>
            </LocalizationProvider>
        </div >
    )
}

export default Calender;