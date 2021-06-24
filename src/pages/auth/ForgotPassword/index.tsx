import { FormikHelpers, FormikProps } from 'formik';
import { Link as ReactLink } from 'react-router-dom';
import { useCallback, useRef } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Copyright from '../LoginPage/Copyright';
import ForgotPasswordForm, {
  ForgotPasswordFormValues,
} from './ForgotPasswordForm';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import useLoginStyles from '../LoginPage/useLoginStyles';

function ForgotPasswordPage(): JSX.Element {
  const classes = useLoginStyles();

  const formRef = useRef<FormikProps<ForgotPasswordFormValues>>(null);

  const onSubmit = useCallback(
    (
      values: ForgotPasswordFormValues,
      actions: FormikHelpers<ForgotPasswordFormValues>,
    ) => {
      setTimeout(() => {
        actions.setErrors({ invalid: 'Feature under development' });
        actions.setSubmitting(false);
      }, 1500);
    },
    [],
  );

  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography variant="h5">Forgot Password</Typography>
      <ForgotPasswordForm formRef={formRef} onSubmit={onSubmit} />

      <Grid container justify="flex-end">
        <Grid item>
          <Link to="/auth/login" variant="body2" component={ReactLink}>
            Login
          </Link>
        </Grid>
      </Grid>

      <Box mt={8}>
        <Copyright />
      </Box>
    </div>
  );
}

export default ForgotPasswordPage;
