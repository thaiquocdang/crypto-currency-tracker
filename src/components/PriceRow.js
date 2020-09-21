import React from "react";

function PriceRow({ coin }) {
  return (
    <div className="row-container">
      <div className="coin-row">
        <div className="coin-info">
            <img src={coin.image} alt='crypto coin'/>
            <div className='coin-name'>{coin.name}</div>
            <div className='coin-symbol'>{coin.symbol}</div>
        </div>
        <div className='coin-data'>
            <div className='coin-price'>${coin.current_price}</div>
            <div className='coin-market-cap'>${coin.market_cap.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
}

export default PriceRow;
