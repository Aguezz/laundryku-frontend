import { ApolloQueryResult, useApolloClient } from '@apollo/client';
import { logout, setUser } from '../features/user/user.slice';
import { setAuthorizationToken } from '../utils/authorization';
import { useAppDispatch } from '../hooks';
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import User from '../models/user.model';
import queries from '../graphql/queries';

interface UseAuth {
  checkToken: () => void;
}

export default function useAuth(): UseAuth {
  const dispatch = useAppDispatch();
  const client = useApolloClient();
  const history = useHistory();

  const checkToken = useCallback(async () => {
    const token = localStorage.getItem('token');
    if (!token) return;

    setAuthorizationToken(client, token);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let result: ApolloQueryResult<any> | null = null;
    try {
      result = await client.query({ query: queries.user.ME });
    } catch (err) {}

    if (result?.data) {
      dispatch(setUser(result.data.me as User));
      return;
    }

    localStorage.removeItem('token');
    dispatch(logout());
    history.push('/auth/logout');
  }, [client, dispatch, history]);

  return { checkToken };
}
