import { Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import AutoRedirect from './components/Route/AutoRedirect';
import Container from '@material-ui/core/Container';
import ForgotPasswordPage from './pages/auth/ForgotPassword';
import GuestRoute from './components/Route/GuestRoute';
import HomePage from './pages/HomePage';
import LoginPage from './pages/auth/LoginPage';
import LogoutPage from './pages/auth/LogoutPage';
import PrivateRoute from './components/Route/PrivateRoute';
import useAuth from './hooks/useAuth';

function App(): JSX.Element {
  const { checkToken } = useAuth();

  useEffect(() => checkToken(), [checkToken]);

  return (
    <Container maxWidth="xs">
      <Switch>
        <Route exact path="/" component={AutoRedirect} />
        <Route exact path="/auth/logout" component={LogoutPage} />

        <GuestRoute exact path="/auth/login" component={LoginPage} />
        <GuestRoute
          exact
          path="/auth/forgot-password"
          component={ForgotPasswordPage}
        />

        <PrivateRoute
          exact
          path="/home"
          allow={['admin', 'customer', 'employee']}
          component={HomePage}
        />
      </Switch>
    </Container>
  );
}

export default App;
