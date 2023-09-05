import * as React from 'react';
//import Table from '@mui/material/Table';
import { Table } from '@mui/material';
//import TableBody from '@mui/material/TableBody';
import { TableBody } from '@mui/material';
//import TableCell from '@mui/material/TableCell';
import { TableCell } from '@mui/material';
import { TableContainer } from '@mui/material';
//import TableContainer from '@mui/material/TableContainer';
//import TableHead from '@mui/material/TableHead';
//import TableRow from '@mui/material/TableRow';
//import Paper from '@mui/material/Paper';
import { TableHead } from '@mui/material';
import { TableRow } from '@mui/material';
import { Paper } from '@mui/material';


export default function DenseTable({newAllDiamonds}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Shape</TableCell>
            <TableCell align="right">Color</TableCell>
            <TableCell align="right">Clarity</TableCell>
            <TableCell align="right">Cut</TableCell>
            <TableCell align="right">Weight</TableCell>
            <TableCell align="right">Price</TableCell>
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
              <TableCell align="right">${dia.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}