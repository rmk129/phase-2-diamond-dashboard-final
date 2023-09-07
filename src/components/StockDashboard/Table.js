import * as React from 'react';
import { Table } from '@mui/material';
import { TableBody } from '@mui/material';
import { TableCell } from '@mui/material';
import { TableContainer } from '@mui/material';
import { TableHead } from '@mui/material';
import { TableRow } from '@mui/material';
import { Paper } from '@mui/material';
import Button from 'react-bootstrap/Button';



export default function StockTable({newAllDiamonds, sellDiamonds, setSellDiamonds}) {

  function addSellDiamond(data){
    setSellDiamonds(...sellDiamonds, data)
  }

function handleSellClick(e){
  const jsonData = e.target.value; 
  const dia = JSON.parse(jsonData);
  
      

    const formData = {
      shape: dia.shape,
      color: dia.color,
      clarity: dia.clarity,
      cut: dia.cut,
      weight: dia.weight,
      cost: dia.cost,
      price: dia.price
  }

  const configObj = {
      method: 'POST', 
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(formData)
  }

  fetch('http://localhost:3000/diamondsToSell', configObj)
  .then(res => res.json())
  .then(data => addSellDiamond(data))
  alert("Your Diamond has been added to your Sales Cart!")

  fetch('http://localhost:3000/diamonds/' + dia.id, {
  method: 'DELETE',
})
e.target.parentNode.parentNode.remove();
    
}


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow className='mainRow'>
            <TableCell>Shape</TableCell>
            <TableCell align="right">Color</TableCell>
            <TableCell align="right">Clarity</TableCell>
            <TableCell align="right">Cut</TableCell>
            <TableCell align="right">Weight</TableCell>
            <TableCell align="right">Cost</TableCell>
            <TableCell align="right">Selling Price</TableCell>
            <TableCell align="right">Click To Sell</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {newAllDiamonds.map((dia) => (
            <TableRow
              key={dia.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {dia.shape}
              </TableCell>
              <TableCell align="right">{dia.color}</TableCell>
              <TableCell align="right">{dia.clarity}</TableCell>
              <TableCell align="right">{dia.cut}</TableCell>
              <TableCell align="right">{dia.weight}ct</TableCell>
              <TableCell align="right">${dia.cost}</TableCell>
              <TableCell align="right">${dia.price}</TableCell>
              <TableCell align="right">
                <Button value={JSON.stringify(dia)} onClick={handleSellClick}>Sell</Button>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}