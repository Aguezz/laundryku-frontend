import { Container } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { Link } from 'react-router-dom';

interface Props {
  link: string;
  title?: string;
}

export default function Navbar({ link, title }: Props): JSX.Element {
  return (
    <div className="absolute inset-x-0 top-0 bg-white">
      <Container maxWidth="xs" className="relative">
        <div className="py-3">
          <Link to={link}>
            <ChevronLeftIcon fontSize="large" />
          </Link>
        </div>

        <div className="absolute font-semibold text-sm top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {title}
        </div>
      </Container>
    </div>
  );
}
