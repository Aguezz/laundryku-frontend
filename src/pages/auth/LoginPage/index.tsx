import { FormikHelpers } from 'formik';
import { useCallback } from 'react';
import LoginForm, { LoginFormValues } from './LoginForm';

function LoginPage(): JSX.Element {
  const onSubmit = useCallback(
    (values: LoginFormValues, actions: FormikHelpers<LoginFormValues>) => {
      // eslint-disable-next-line no-console
      console.log(values, actions);
    },
    [],
  );

  return (
    <>
      <LoginForm onSubmit={onSubmit} />
    </>
  );
}

export default LoginPage;
