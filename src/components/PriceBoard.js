import Axios from "axios";
import React, { useEffect, useState } from "react";
// import PriceRow from './PriceRow'
import { makeStyles, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, styled } from '@material-ui/core'
import Image from 'material-ui-image';


const useStyles = makeStyles({
    tableContainer: {
        maxWidth: "1200px",
        margin:'0 auto',
    },

    table: {
      minWidth: 550,
    },

    tableHead: {
        background: '#f7c845',
        textTransform: "capitalize",
    },

    tableRow: {
        cursor: "pointer",
        
    },

    plus: {
        color: '#1dc43c',
    },

    minus: {
        color: '#ff4f03'
    }
  });

function PriceBoard({ search }) {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await Axios.get(url)
        .then((res) => {
          setCoins(res.data);
        })
        .catch((err) => console.log(err));
    };
    getData();
  }, []);
//   console.log(coins);

  const filterCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  const classes = useStyles();

  return (
    <TableContainer className={classes.tableContainer}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell align="center">Logo</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="center">Symbol</TableCell>
            <TableCell align="center">current&nbsp;Price(usd)</TableCell>
            <TableCell align="center">Price&nbsp;Change</TableCell>
            <TableCell align="center">Percentage&nbsp;Change</TableCell>
            <TableCell align="center">Market&nbsp;Cap</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filterCoins.map((coin) => (
            <TableRow key={coin.name} className={classes.tableRow}>
              <TableCell align="center">
                <Image src={coin.image} />
              </TableCell>
              <TableCell align="left">{coin.name}</TableCell>
              <TableCell align="center">{coin.symbol.toUpperCase()}</TableCell>
              <TableCell align="center">{coin.current_price.toFixed(2)}</TableCell>
              <TableCell align="center" className={coin.price_change_24h > 0 ? classes.plus : classes.minus}>{coin.price_change_24h.toFixed(2)}</TableCell>
              <TableCell align="center" className={coin.price_change_percentage_24h > 0 ? classes.plus : classes.minus}>{coin.price_change_percentage_24h.toFixed(2)}</TableCell>
              <TableCell align="center">{coin.market_cap.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PriceBoard;

// <div>
//     {filterCoins.map(coin => (
//         <PriceRow coin={coin} key={coin.id} />
//     ))}
// </div>

// <TableCell component="th" scope="row"> {coin.name}</TableCell>
