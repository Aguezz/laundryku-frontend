import { Formik, FormikHelpers, FormikProps } from 'formik';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import useLoginStyles from './useLoginStyles';

export interface LoginFormValues {
  invalid?: string;
  identifier: string;
  password: string;
}

export type LoginValidationError = {
  identifier?: string;
  password?: string;
  invalid?: string;
};

type LoginFormProps = {
  formRef: React.RefObject<FormikProps<LoginFormValues>>;
  onSubmit: (
    values: LoginFormValues,
    actions: FormikHelpers<LoginFormValues>,
  ) => void;
};

function LoginForm({ formRef, onSubmit }: LoginFormProps): JSX.Element {
  const initialValues: LoginFormValues = { identifier: '', password: '' };
  const classes = useLoginStyles();

  return (
    <Formik
      initialValues={initialValues}
      innerRef={formRef}
      onSubmit={onSubmit}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        errors,
        values,
      }) => (
        <form onSubmit={handleSubmit} className={classes.form}>
          {errors?.invalid && <Alert severity="error">{errors.invalid}</Alert>}

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="identifier"
            label="Username or E-mail"
            name="identifier"
            value={values.identifier}
            autoComplete="identifier"
            onChange={handleChange}
            onBlur={handleBlur}
            autoFocus
            disabled={isSubmitting}
            error={!!errors?.identifier}
            helperText={errors?.identifier}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="password"
            id="password"
            label="Password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            autoFocus
            disabled={isSubmitting}
            error={!!errors?.password}
            helperText={errors?.password}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            fullWidth
            className={classes.submit}
          >
            Sign In
          </Button>

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
}

export default LoginForm;
