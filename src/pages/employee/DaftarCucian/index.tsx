import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Navbar from '../../../components/Navbar';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(menyerahkan: string, nama: string, status: 0 | 1 | 2 | 3) {
  return {
    menyerahkan,
    nama,
    status,
    jumlahCucian: 9,
    harga: 31000,
    history: [
      { jenisCucian: 'Kaos (kering)', jumlah: 3, harga: 6000 },
      { jenisCucian: 'Celana pendek (kering)', jumlah: 3, harga: 9000 },
      { jenisCucian: 'Celana kerja (kering)', jumlah: 2, harga: 8000 },
      { jenisCucian: 'Jeans (kering)', jumlah: 1, harga: 8000 },
    ],
  };
}

interface Props {
  row: {
    menyerahkan: string;
    nama: string;
    status: 0 | 1 | 2 | 3;
    jumlahCucian: number;
    harga: number;
    history: Array<{
      jenisCucian: string;
      jumlah: number;
      harga: number;
    }>;
  };
}

function Row(props: Props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="center" className="whitespace-nowrap">
          {row.menyerahkan}
        </TableCell>
        <TableCell align="center" className="whitespace-nowrap">
          {row.nama}
        </TableCell>
        <TableCell align="center">{row.jumlahCucian}</TableCell>
        <TableCell align="center">
          {row.status === 0 ? (
            <strong className="text-blue-500">Dijemput</strong>
          ) : row.status === 1 ? (
            <strong className="text-gray-600">Dalam antrian</strong>
          ) : row.status === 2 ? (
            <strong className="text-yellow-500">Sedang Dikerjakan</strong>
          ) : (
            <strong className="text-green-500">Selesai</strong>
          )}
        </TableCell>
        <TableCell align="right">
          {row.harga.toLocaleString().replace(',', '.')}
        </TableCell>
        <TableCell>
          <Button
            variant="contained"
            size="small"
            color="secondary"
            className="whitespace-nowrap"
          >
            <strong>Ubah Status</strong>
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <strong>Jenis Cucian</strong>
                    </TableCell>
                    <TableCell align="right">
                      <strong>Jumlah</strong>
                    </TableCell>
                    <TableCell align="right">
                      <strong>Harga (Rp)</strong>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {historyRow.jenisCucian}
                      </TableCell>
                      <TableCell align="right">{historyRow.jumlah}</TableCell>
                      <TableCell align="right">
                        {historyRow.harga.toLocaleString().replace(',', '.')}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

const rows = [
  createData('2021-07-30', 'Agus Stiawan', 0),
  createData('2021-07-22', 'Harun Baharuddin', 1),
  createData('2021-07-20', 'Kholilur Rohman', 2),
  createData('2021-07-20', 'Novita Khasanah', 3),
  createData('2021-07-20', 'Syafrina Dyah K.', 3),
];

export default function EmployeeDaftarCucian(): JSX.Element {
  return (
    <div className="pt-17">
      <Navbar link="/employee" title="Daftar Cucian" />

      <h1 className="text-xl text-center font-semibold">Daftar Cucian</h1>

      <TableContainer
        component={Paper}
        className="mt-7 shadow-lg"
        variant="outlined"
      >
        <Table aria-label="collapsible table">
          <TableHead className="bg-green-200">
            <TableRow>
              <TableCell />
              <TableCell align="center">
                <strong>Tanggal</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Nama</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Cucian</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Status</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Total Harga (Rp)</strong>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <Row key={index} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
