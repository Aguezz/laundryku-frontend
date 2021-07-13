import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Container from '@material-ui/core/Container';
import HistoryIcon from '@material-ui/icons/History';
import HomeIcon from '@material-ui/icons/Home';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import PersonIcon from '@material-ui/icons/Person';
import useCustomerNavigationStyles from './useCustomerNavigationStyles';

const data = [
  '/customer',
  '/customer/laundry',
  '/customer/history',
  '/customer/account',
];

type ActiveItem = 0 | 1 | 2 | 3;

function CustomerNavigation(): JSX.Element {
  const classes = useCustomerNavigationStyles();
  const history = useHistory();

  const [activeItem, setActiveItem] = useState<ActiveItem>(0);

  useEffect(() => {
    const newActiveItem = data.indexOf(history.location.pathname);
    if (activeItem !== newActiveItem && newActiveItem !== -1) {
      setActiveItem(newActiveItem as ActiveItem);
    }
  }, [activeItem, history.location.pathname]);

  return (
    <Container maxWidth="xs" className={classes.navigation}>
      <BottomNavigation
        value={activeItem}
        onChange={(event, newValue) => {
          setActiveItem(newValue);
          history.push(data[newValue]);
        }}
        showLabels={false}
        style={{ boxShadow: '0 0 18px 2px rgba(0, 0, 0, .3)' }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction
          label="Cucian"
          icon={<LocalGroceryStoreIcon />}
        />
        <BottomNavigationAction label="History" icon={<HistoryIcon />} />
        <BottomNavigationAction label="Account" icon={<PersonIcon />} />
      </BottomNavigation>
    </Container>
  );
}

export default CustomerNavigation;
