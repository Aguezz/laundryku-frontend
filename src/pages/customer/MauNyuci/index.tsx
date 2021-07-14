import { Alert } from '@material-ui/lab';
import { Button, Container, TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import LocalShippingTwoToneIcon from '@material-ui/icons/LocalShippingTwoTone';
import Navbar from '../../../components/Navbar';

export default function MauNyuci(): JSX.Element {
  const history = useHistory();

  const [address, setAddress] = useState(
    ' Apartemen Mansion City Lantai 7 No. 32, Jalan Rumput Hijau Kav. 18, Matraman, Jakarta Timur, 13120',
  );

  const [isProceed, setIsProceed] = useState(false);

  if (isProceed) {
    return (
      <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2">
        <Container maxWidth="xs" style={{ padding: '0 12px !important' }}>
          <div className="text-center">
            <LocalShippingTwoToneIcon
              className="text-green-500"
              style={{ fontSize: '75px' }}
            />
          </div>

          <h1 className="text-center text-xl font-semibold mt-5">
            Permintaan <br /> Penjemputan Berhasil Dikirim
          </h1>

          <p className="mt-5 text-center text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>

          <div className="mt-10">
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => history.push('/customer')}
            >
              <strong>Lihat Status Penjemputan</strong>
            </Button>
          </div>
          <div className="mt-3">
            <Button
              variant="outlined"
              fullWidth
              onClick={() => history.push('/customer')}
            >
              <strong>Kembali</strong>
            </Button>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <Navbar link="/customer" title="Mau Nyuci" />

      <Alert severity="warning">
        Pastikan Anda memasukkan data <strong>alamat</strong> dengan{' '}
        <strong>benar</strong>.
      </Alert>

      <div className="mt-4">
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Alamat"
          value={address}
          autoComplete="identifier"
          onChange={(e) => setAddress(e.target.value)}
          multiline
        />

        <div className="mt-3">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => setIsProceed(true)}
          >
            <strong>Minta Jemput Cucian</strong>
          </Button>
        </div>
      </div>
    </div>
  );
}
