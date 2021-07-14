import { useAppSelector } from '../../../hooks';

import { Avatar, Card } from '@material-ui/core';
import { Bar } from 'react-chartjs-2';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ListAltTwoToneIcon from '@material-ui/icons/ListAltTwoTone';
import LocalLaundryServiceTwoToneIcon from '@material-ui/icons/LocalLaundryServiceTwoTone';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import SettingsApplicationsTwoToneIcon from '@material-ui/icons/SettingsApplicationsTwoTone';

const data = {
  labels: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  datasets: [
    {
      label: '# jumlah pelanggan',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(118, 255, 64, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        '#45a500',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const style = {
  color: '#10B981',
};

const links = [
  [
    '/employee/jemput',
    'Penjemputan',
    <LocalShippingIcon key={0} className="block" style={style} />,
  ],
  [
    '/employee/tambah-cucian',
    'Tambah Cucian',
    <LocalLaundryServiceTwoToneIcon key={1} className="block" style={style} />,
  ],
  [
    '/employee/daftar-cucian',
    'Daftar Cucian',
    <ListAltTwoToneIcon key={2} className="block" style={style} />,
  ],
  [
    '/employee/account',
    'Pengaturan',
    <SettingsApplicationsTwoToneIcon key={3} className="block" style={style} />,
  ],
];

function EmployeeHome(): JSX.Element {
  const history = useHistory();
  const user = useAppSelector((state) => state.user.user);

  return (
    <div>
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

      <div className="mt-5">
        <Bar type="line" data={data} options={options} />
      </div>

      <div className="grid grid-cols-2 grid-rows-4 gap-3 mt-5">
        {links.map(([link, name, icon], index) => (
          <Card
            key={index}
            variant="outlined"
            className="shadow-lg bg-gray-100 hover:bg-gray-200 font-semibold px-3 py-5 cursor-pointer text-center"
            onClick={() => history.push(String(link))}
          >
            {icon}
            <div className="text-center mt-3 text-sm">{name}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default EmployeeHome;
