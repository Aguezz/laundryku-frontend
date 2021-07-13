import { makeStyles } from '@material-ui/core/styles';

const useCustomerNavigationStyles = makeStyles(() => ({
  navigation: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
}));

export default useCustomerNavigationStyles;
