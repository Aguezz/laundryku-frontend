import Paper from '@material-ui/core/Paper';
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function createData(name: string, quantity: number, price: number) {
  return { name, quantity, price };
}

const rows = [
  createData('Kaos (kering)', 2, 4000),
  createData('Celana (kering)', 2, 6000),
  createData('Kemeja (setrika)', 1, 6000),
];

export default function TambahCucianList(): JSX.Element {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Jenis Cucian</strong>
            </TableCell>
            <TableCell align="right">
              <strong>Jumlah</strong>
            </TableCell>
            <TableCell align="right">
              <strong>Harga&nbsp;(Rp)</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">
                {row.price.toLocaleString().replace(',', '.')}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
