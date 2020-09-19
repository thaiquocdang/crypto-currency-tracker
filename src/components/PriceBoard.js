import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import Coin from './PriceRow'

function PriceBoard({ search }) {
    const url ='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        const getData = async () => {
            await Axios
            .get(url)
            .then(res => {
                setCoins(res.data);
            })
            .catch(err => console.log(err))
        } 
        getData();
    }, [])
    console.log(coins);

    const filterCoins = coins.filter( coin => 
        coin.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div>
            {filterCoins.map(coin => (
                <Coin data={coin} key={coin.id} />
            ))}
        </div>
    )
}

export default PriceBoard
