import { useHistory } from 'react-router-dom';
import EmailIcon from '@material-ui/icons/Email';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import useAccountStyles from './useAccountStyles';

function AccountLinks(): JSX.Element {
  const history = useHistory();
  const classes = useAccountStyles();

  return (
    <div className="mt-4">
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Identitas" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          <ListItemText primary="Email" />
        </ListItem>
        <ListItem
          button
          className={classes.redColor}
          onClick={() => history.push('/auth/logout')}
        >
          <ListItemIcon className={classes.redColor}>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </div>
  );
}

export default AccountLinks;
