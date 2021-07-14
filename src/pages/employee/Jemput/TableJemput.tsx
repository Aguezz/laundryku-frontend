import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function createData(date: string, name: string) {
  return { date, name };
}

const rows = [
  createData('2021-07-20', 'Agus Stiawan'),
  createData('2021-07-20', 'Harun Baharuddin'),
  createData('2021-07-20', 'Kholilur Rohman'),
  createData('2021-07-20', 'Novita Khasanah'),
  createData('2021-07-20', 'Syafrina Dyah K.'),
];

export default function TableJemput(): JSX.Element {
  return (
    <TableContainer component={Paper} variant="outlined" className="shadow">
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Tanggal</strong>
            </TableCell>
            <TableCell>
              <strong>Nama</strong>
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="center" className="whitespace-nowrap">
                {row.date}
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                className="whitespace-nowrap"
              >
                {row.name}
              </TableCell>
              <TableCell align="right" className="whitespace-nowrap">
                <Button
                  size="small"
                  variant="contained"
                  className="whitespace-nowrap"
                >
                  <strong>Detail</strong>
                </Button>
                &nbsp;
                <Button
                  size="small"
                  variant="contained"
                  color="secondary"
                  className="whitespace-nowrap"
                >
                  <strong>Tolak</strong>
                </Button>
                &nbsp;
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  className="whitespace-nowrap"
                >
                  <strong>Terima</strong>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
