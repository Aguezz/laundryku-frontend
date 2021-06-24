import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

function Copyright(): JSX.Element {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://laundryku-frontend.vercel.com/">
        Laundryku
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default Copyright;
