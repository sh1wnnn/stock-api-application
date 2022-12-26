import { useState , useEffect } from 'react';
import axios from 'axios';
import './Components.css'

function Status() {
    const [marketStatus, setMarketStatus] = useState('')
    useEffect(function getMarketStatus() {
      axios.get('https://api.polygon.io/v1/marketstatus/now?apiKey=4cvV0IYDs9alFsauGo39ycXj7r0myHGc')
      .then(res => {
        setMarketStatus(res.data.market)
      }).catch(err => {
        console.log(err)
      })
    }, [])

    return (
        <div>
            { marketStatus && <h1 className="StatusComponent">{marketStatus}</h1> }
        </div>
    )
}

export default Status