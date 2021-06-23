import { Redirect } from 'react-router';
import { logout } from '../../../features/user/user.slice';
import { unsetAuthorizationToken } from '../../../utils/authorization';
import { useApolloClient } from '@apollo/client';
import { useAppDispatch } from '../../../hooks';
import { useEffect } from 'react';

function LogoutPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const client = useApolloClient();

  useEffect(() => {
    unsetAuthorizationToken(client);
    localStorage.removeItem('token');
    dispatch(logout());
  }, [client, dispatch]);

  return <Redirect to="/auth/login" />;
}

export default LogoutPage;
