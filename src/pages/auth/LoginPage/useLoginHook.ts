import { setAuthorizationToken } from '../../../utils/authorization';
import { setUser } from '../../../features/user/user.slice';
import { useApolloClient, useMutation } from '@apollo/client';
import { useAppDispatch } from '../../../hooks';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import User from '../../../models/user.model';
import mutations from '../../../graphql/mutations';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function useLoginHook() {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const [loginMutation, loginOptions] = useMutation(mutations.auth.LOGIN);
  const client = useApolloClient();

  useEffect(() => {
    if (loginOptions.data) {
      const { user, jwt } = loginOptions.data.login;

      localStorage.setItem('token', jwt);
      setAuthorizationToken(client, jwt);
      dispatch(setUser(user as User));

      history.push('/');
    }
  }, [client, dispatch, history, loginOptions.data]);

  return {
    loginMutation,
    loginOptions,
  };
}

export default useLoginHook;
