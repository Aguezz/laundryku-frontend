import { Route, Switch, useLocation } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import {
  customerRoutes,
  employeeRoutes,
  guestRoutes,
  publicRoutes,
} from './routes';
import { useAppSelector } from './hooks';
import Container from '@material-ui/core/Container';
import CustomerNavigation from './components/CustomerNavigation';
import GuestRoute from './components/Route/GuestRoute';
import PrivateRoute from './components/Route/PrivateRoute';
import useAuth from './hooks/useAuth';

function App(): JSX.Element {
  const location = useLocation();

  const { checkToken } = useAuth();
  const user = useAppSelector((state) => state.user.user);

  const [isBottomBarShow, setIsBottomBarShow] = useState(false);

  useEffect(() => {
    if (
      [
        '/customer',
        '/customer/laundry',
        '/customer/history',
        '/customer/account',
      ].includes(location.pathname)
    ) {
      setIsBottomBarShow(true);
    } else {
      setIsBottomBarShow(false);
    }
  }, [location.pathname]);

  useEffect(() => checkToken(), [checkToken]);

  return (
    <Container maxWidth="xs" className="pb-24">
      <Suspense fallback={<>Loading...</>}>
        <Switch>
          {publicRoutes.map(({ exact, path, component }, index) => (
            <Route
              key={index}
              exact={exact}
              path={path}
              component={component}
            />
          ))}

          {guestRoutes.map(({ exact, path, component }, index) => (
            <GuestRoute
              key={index}
              exact={exact}
              path={path}
              component={component}
            />
          ))}

          {employeeRoutes.map(({ exact, path, component }, index) => (
            <PrivateRoute
              allow={['admin', 'employee']}
              key={index}
              exact={exact}
              path={path}
              component={component}
            />
          ))}

          {customerRoutes.map(({ exact, path, component }, index) => (
            <PrivateRoute
              allow={['customer']}
              key={index}
              exact={exact}
              path={path}
              component={component}
            />
          ))}
        </Switch>

        {user.role?.type === 'customer' && isBottomBarShow && (
          <CustomerNavigation />
        )}
      </Suspense>
    </Container>
  );
}

export default App;
