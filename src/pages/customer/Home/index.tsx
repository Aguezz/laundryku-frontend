import { Alert, AlertTitle } from '@material-ui/lab';
import { Avatar, Button, Card } from '@material-ui/core';
import { useAppSelector } from '../../../hooks';
import { useHistory } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ListAltTwoToneIcon from '@material-ui/icons/ListAltTwoTone';
import LocalLaundryServiceTwoToneIcon from '@material-ui/icons/LocalLaundryServiceTwoTone';

function CustomerHome(): JSX.Element {
  const history = useHistory();
  const user = useAppSelector((state) => state.user.user);

  return (
    <>
      <div className="flex justify-between items-center pt-8">
        <div className="flex items-center gap-4">
          <Avatar>{(user?.name && user.name[0]) || ''}</Avatar>
          {/* <div className="w-10 h-10 bg-dark rounded-full" /> */}
          <div>
            <div className="text-gray-500 text-xs">Welcome</div>
            <div className="text-lg font-semibold text-sm">{user.name}</div>
          </div>
        </div>
        <div>
          <Button
            type="button"
            onClick={() => history.push('/auth/logout')}
            color="secondary"
          >
            <ExitToAppIcon />
          </Button>
        </div>
      </div>

      <Alert severity="info" className="mt-8">
        <AlertTitle>Info</AlertTitle>
        <strong>MyLaundry</strong> sedang mengadakan promo pencucian dengan
        diskon 50%. Promo berlaku sampai tanggal 30 Juni —{' '}
        <strong>check it out!</strong>
      </Alert>

      <div className="grid grid-cols-2 gap-4 mt-5">
        <Card
          variant="outlined"
          className="shadow-lg font-semibold text-sm bg-gray-100 hover:bg-gray-200 px-3 py-5 text-center"
        >
          <div>
            <LocalLaundryServiceTwoToneIcon className="text-green-500" />
          </div>
          <div className="mt-3">Mau Nyuci</div>
        </Card>
        <Card
          variant="outlined"
          className="shadow-lg font-semibold text-sm bg-gray-100 hover:bg-gray-200 px-3 py-5 text-center"
        >
          <div>
            <ListAltTwoToneIcon className="text-green-500" />
          </div>
          <div className="mt-3">Daftar Harga</div>
        </Card>
      </div>
    </>
  );
}

export default CustomerHome;
