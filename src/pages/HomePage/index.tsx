import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';

function HomePage(): JSX.Element {
  const user = useAppSelector((state) => state.user.user);

  return (
    <>
      <h1>
        Hello {user.username}, you login as ${user.role?.name}
      </h1>
      <Link to="/auth/logout">Logout</Link>
    </>
  );
}

export default HomePage;
