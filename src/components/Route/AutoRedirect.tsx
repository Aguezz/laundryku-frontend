import { Redirect } from 'react-router-dom';
import { availableRole, getReferrerRoute } from '../../utils/route';
import { useAppSelector } from '../../hooks';

function AutoRedirect(): JSX.Element {
  const { isAuthenticated, user } = useAppSelector((state) => state.user);

  if (!isAuthenticated) return <Redirect to="/auth/login" />;

  return <Redirect to={getReferrerRoute(user.role?.type as availableRole)} />;
}

export default AutoRedirect;
