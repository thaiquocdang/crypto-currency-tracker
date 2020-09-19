import React from "react";

function PriceRow({ data }) {
  return (
    <div className="row-container">
      <div className="coin-row">
        <div className="coin-info">
            <img src={data.image} alt='crypto coin'/>
            <div className='coin-name'>{data.name}</div>
            <div className='coin-symbol'>{data.symbol}</div>
        </div>
        <div className='coin-data'>
            <div className='coin-price'>${data.current_price}</div>
            <div className='coin-market-cap'>${data.market_cap.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
}

export default PriceRow;
