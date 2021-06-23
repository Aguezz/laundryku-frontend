import { FormikHelpers, FormikProps } from 'formik';
import { sanitizeValidationError } from '../../../utils/errorHandler';
import { useAppSelector } from '../../../hooks';
import { useCallback, useEffect, useRef } from 'react';
import LoginForm, { LoginFormValues, LoginValidationError } from './LoginForm';
import useLoginHook from './useLoginHook';

function LoginPage(): JSX.Element {
  const user = useAppSelector((state) => state.user);

  const { loginMutation, loginOptions } = useLoginHook();

  const formRef = useRef<FormikProps<LoginFormValues>>(null);

  const onSubmit = useCallback(
    async (
      values: LoginFormValues,
      actions: FormikHelpers<LoginFormValues>,
    ) => {
      try {
        await loginMutation({
          variables: {
            identifier: values.identifier,
            password: values.password,
          },
        });
      } catch (err) {
        /** */
        console.log(err);
      }

      actions.setSubmitting(false);
    },
    [loginMutation],
  );

  useEffect(() => {
    if (!formRef.current) return;
    const err = loginOptions.error?.graphQLErrors[0];

    if (err) {
      const errors = sanitizeValidationError<LoginValidationError>(err);
      formRef.current.setErrors(errors);
    }
  }, [loginOptions.error]);

  return (
    <>
      {user.isAuthenticated && <p>Logged In</p>}
      <LoginForm formRef={formRef} onSubmit={onSubmit} />
    </>
  );
}

export default LoginPage;
