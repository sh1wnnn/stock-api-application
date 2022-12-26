import { useState , useEffect } from 'react';
import axios from 'axios';
import './Components.css'

function Ticker() {
    const [tickerClosing, setTickerClosing] = useState('')
    const [tickerOpening, setTickerOpening] = useState('')
    const [ticker,setTicker] = useState('')

    useEffect(function getTickerClosing() {
      if (ticker) {
        axios.get(`https://api.polygon.io/v2/aggs/ticker/${ticker}/prev?adjusted=true&apiKey=4cvV0IYDs9alFsauGo39ycXj7r0myHGc`)
        .then(res => {
          setTickerClosing(res.data.results[0].c)
          setTickerOpening(res.data.results[0].o)
        }).catch(err => {
          console.log(err)
        })
      }
    }, [ticker])

    return (
        <div>
          <form className="TickerComponent">
            <input
              type="text"
              id="ticker"
              value={ticker}
              onChange={(e) => setTicker(e.target.value)}
            />
          </form>
          <h1 className="TickerComponent">Opening Price:</h1>
          { tickerOpening && <h1 className="TickerComponent">{tickerOpening}</h1>}
          <h1 className="TickerComponent">Closing Price:</h1>
          { tickerClosing && <h1 className="TickerComponent">{tickerClosing}</h1>}
        </div>
    )
}

export default Ticker