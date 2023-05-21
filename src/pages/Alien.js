import React from 'react'
import alien from '../assets/alien.jpg'
import CountDown from '../components/CountDown'
import HistoryTable from '../components/HistoryTable'
import '../styles/PagesDesc.css'

const Alien = () => {

    const data = [
      { id: 1, column1: 'Tsion Moges', column2: '5.5 ETH', column3: '13 Hours ago' },
      { id: 2, column1: 'Tselote Yonas', column2: '3.3 ETH', column3: '14 Hours ago' },
      { id: 3, column1: 'Selina Yeshanew', column2: '2.5 ETH', column3: '16 hours ago' },
      { id: 4, column1: 'Abebe Kebede', column2: '1.1 ETH', column3: '20 Hours ago' },
      { id: 5, column1: 'Azalu Mekbeb', column2: '0.5 ETH', column3: '1 Day ago' },
    ];
  return (
    <div className='alien'>
      <div className='left' style={{ backgroundImage:`url(${alien})` }}></div>
      <div className='right'>
        <h1>Alien X</h1>
        {/* <p id="title">Created on &nbsp; &nbsp; &nbsp; &nbsp; Items &nbsp; &nbsp; &nbsp;  
          Owners &nbsp; &nbsp; &nbsp; Floor Price&nbsp; &nbsp; &nbsp; Current Price &nbsp; &nbsp; &nbsp; Creator Earnings </p>
        <p id="value">mar 2023&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 10 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
         48 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 0.1 Eth&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 5 ETH &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 5% </p> */}
        <div className='firstInline'>
        <span>Created On</span>
        <span>Items</span>
        <span>Owners</span>
        <span>Floor Price</span>
        <span>Current Price</span>
        <span>Creator Earnings</span>
        </div>
        <div>&nbsp;</div>
        <div className='secondInline'>
        <span>Mar 23</span>
        <span>10</span>
        <span>48</span>
        <span>0.1 ETH</span>
        <span>5 ETH</span>
        <span>&nbsp;&nbsp;&nbsp;5%</span>
        </div>
        <div>&nbsp;</div>

        <h2>Auction Duration</h2>
        <CountDown countdownTimestampMs={1685032714000}/> {/* 1684724434 */}
        <div>&nbsp;</div>
        <p>Consensual Hallucinations</p>
        <h3>by Shovin Bhattacharjee</h3>
        {/* <div>&nbsp;</div> */}
        <button className='address'>Address</button>
        {/* <div>&nbsp;</div> */}
        <div className="table">
          <h3 id='history'>Trading History</h3>
          <HistoryTable data = {data} />
        </div>   
        <div>&nbsp;</div>
        <button className='makeOffer'>Make Offer</button>

        
      </div>
    </div>
  );
}
export default Alien
