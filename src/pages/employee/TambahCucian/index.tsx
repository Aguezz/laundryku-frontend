import Button from '@material-ui/core/Button';
import Navbar from '../../../components/Navbar';
import TambahCucianList from './table';
import TextField from '@material-ui/core/TextField';

export default function EmployeeTambahCucian(): JSX.Element {
  return (
    <div className="pt-16">
      <Navbar link="/customer" title="Tambah Cucian" />

      <div>
        <Button
          size="small"
          style={{ backgroundColor: 'rgba(229, 231, 235, 1)' }}
        >
          <strong>Pilih Customer</strong>
        </Button>

        <TextField
          variant="outlined"
          margin="normal"
          label="Nama Customer"
          size="small"
          value="John Doe"
          InputProps={{
            readOnly: true,
          }}
          fullWidth
        />

        <TextField
          variant="outlined"
          margin="normal"
          label="Alamat"
          size="small"
          value="Apartemen Mansion City Lantai 7 No. 32, Jalan Rumput Hijau Kav. 18, Matraman, Jakarta Timur, 13120"
          InputProps={{
            readOnly: true,
          }}
          multiline
          fullWidth
        />
      </div>

      <TambahCucianList />

      <div className="text-right mt-3">
        <Button
          size="small"
          style={{ backgroundColor: 'rgba(229, 231, 235, 1)' }}
        >
          <strong>Tambah</strong>
        </Button>
        <Button
          size="small"
          style={{ backgroundColor: 'rgba(229, 231, 235, 1)', marginLeft: 8 }}
        >
          <strong>Ubah</strong>
        </Button>
      </div>

      <div className="mt-6">
        <Button size="small" variant="contained" color="primary" fullWidth>
          <strong>Tambah Cucian</strong>
        </Button>
      </div>
    </div>
  );
}
