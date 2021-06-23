import { Redirect, Route, RouteProps } from 'react-router-dom';
import { availableRole } from '../../utils/route';
import { useAppSelector } from '../../hooks';

interface PrivateRouteProps extends RouteProps {
  allow: Array<availableRole>;
}

function getReferrerRoute(role: availableRole | undefined): string {
  switch (role) {
    case 'admin':
      return '/';
    case 'employee':
      return '/';
    case 'customer':
      return '/';
    default:
      return '/auth/logout';
  }
}

function PrivateRoute({
  allow,
  component: Component,
  ...props
}: PrivateRouteProps): JSX.Element {
  const { user, isAuthenticated } = useAppSelector((state) => state.user);

  if (!isAuthenticated) return <Redirect to="/auth/login" />;

  const isRoleSame = allow.includes(user.role?.type as availableRole);

  return (
    <Route
      {...props}
      render={(routeProps) =>
        isRoleSame ? (
          Component && <Component {...routeProps} />
        ) : (
          <Redirect
            {...routeProps}
            to={getReferrerRoute(user.role?.type as availableRole)}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
