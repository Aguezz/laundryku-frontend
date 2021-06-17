import { Formik, Field, FormikHelpers } from 'formik';

export type LoginFormValues = {
  username: string;
  password: string;
};

export type LoginValidationError = {
  username?: string;
  password?: string;
};

type LoginFormProps = {
  onSubmit: (
    values: LoginFormValues,
    actions: FormikHelpers<LoginFormValues>,
  ) => void;
};

function LoginForm({ onSubmit }: LoginFormProps): JSX.Element {
  const initialValues: LoginFormValues = { username: '', password: '' };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit, errors }) => (
        <form onSubmit={handleSubmit}>
          <Field name="username" />
          {errors?.username && <span>{errors.username}</span>}

          <Field name="username" />
          {errors?.username && <span>{errors.username}</span>}

          <button type="submit">Login</button>
        </form>
      )}
    </Formik>
  );
}

export default LoginForm;
