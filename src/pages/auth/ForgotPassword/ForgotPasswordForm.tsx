import { Formik, FormikHelpers, FormikProps } from 'formik';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import useLoginStyles from '../LoginPage/useLoginStyles';

export interface ForgotPasswordFormValues {
  invalid?: string;
  email: string;
}

export type ForgotPasswordValidationError = {
  email?: string;
  invalid?: string;
};

type ForgotPasswordFormProps = {
  formRef: React.RefObject<FormikProps<ForgotPasswordFormValues>>;
  onSubmit: (
    values: ForgotPasswordFormValues,
    actions: FormikHelpers<ForgotPasswordFormValues>,
  ) => void;
};

function ForgotPasswordForm({
  formRef,
  onSubmit,
}: ForgotPasswordFormProps): JSX.Element {
  const initialValues: ForgotPasswordFormValues = { email: '' };
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
            id="email"
            type="email"
            label="E-mail"
            name="email"
            value={values.email}
            autoComplete="email"
            onChange={handleChange}
            onBlur={handleBlur}
            autoFocus
            disabled={isSubmitting}
            error={!!errors?.email}
            helperText={errors?.email}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            fullWidth
            className={classes.submit}
          >
            Send Instruction
          </Button>
        </form>
      )}
    </Formik>
  );
}

export default ForgotPasswordForm;
