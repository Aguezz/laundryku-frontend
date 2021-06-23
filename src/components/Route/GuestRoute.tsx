import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAppSelector } from '../../hooks';

type GuestRouteProps = RouteProps;

function GuestRoute({
  component: Component,
  ...props
}: GuestRouteProps): JSX.Element {
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);
  return (
    <Route
      {...props}
      render={(routeProps) =>
        isAuthenticated ? (
          <Redirect {...routeProps} to="/" />
        ) : (
          Component && <Component {...routeProps} />
        )
      }
    />
  );
}

export default GuestRoute;
