import { useState , useEffect } from 'react';
import axios from 'axios';
import './Components.css'

function Holiday() {
    const [holiday, setHoliday] = useState('')
    useEffect(function getHoliday() {
      axios.get('https://api.polygon.io/v1/marketstatus/upcoming?apiKey=4cvV0IYDs9alFsauGo39ycXj7r0myHGc')
      .then(res => {
        setHoliday(res.data[0].name)
      }).catch(err => {
        console.log(err)
      })
    }, [])

    return (
        <div>
            { holiday && <h1 className="HolidayComponent">{holiday}</h1> }
        </div>
    )
}

export default Holiday