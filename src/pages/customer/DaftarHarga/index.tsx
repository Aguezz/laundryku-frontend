import { useState } from 'react';
import Navbar from '../../../components/Navbar';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';

function createData(name: string, price: number) {
  return { name, price };
}

const rows = [
  createData('Kaos (basah)', 1000),
  createData('Kaos (kering)', 2000),
  createData('Kaos (setrika)', 3000),
  createData('Celana (basah)', 2000),
  createData('Celana (kering)', 3000),
  createData('Celana (setrika)', 4000),
  createData('Seprai (basah)', 20000),
  createData('Seprai (kering)', 35000),
];

export default function CustomerDaftarHarga(): JSX.Element {
  const [search, setSearch] = useState('');

  return (
    <div className="pt-16">
      <Navbar link="/customer" title="Daftar Harga" />

      <TextField
        variant="outlined"
        margin="normal"
        label="Search"
        value={search}
        size="small"
        onChange={(e) => setSearch(e.target.value)}
      />

      <TableContainer component={Paper} variant="outlined">
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Jenis</strong>
              </TableCell>
              <TableCell align="right">
                <strong>Harga&nbsp;(Rp)</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell>{row.name}</TableCell>
                <TableCell align="right">
                  {row.price.toLocaleString().replace(',', '.')}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
