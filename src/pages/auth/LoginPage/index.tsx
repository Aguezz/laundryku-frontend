import { FormikHelpers, FormikProps } from 'formik';
import { gql, useMutation } from '@apollo/client';
import { sanitizeValidationError } from '../../../utils/errorHandler';
import { useCallback, useEffect, useRef } from 'react';
import LoginForm, { LoginFormValues, LoginValidationError } from './LoginForm';

const LOGIN = gql`
  mutation Login($identifier: String!, $password: String!) {
    login(input: { identifier: $identifier, password: $password }) {
      jwt
      user {
        id
        username
        email
        role {
          type
          name
        }
      }
    }
  }
`;

function LoginPage(): JSX.Element {
  const [login, { data, error }] = useMutation(LOGIN);

  const formRef = useRef<FormikProps<LoginFormValues>>(null);

  const onSubmit = useCallback(
    async (
      values: LoginFormValues,
      actions: FormikHelpers<LoginFormValues>,
    ) => {
      try {
        await login({
          variables: {
            identifier: values.identifier,
            password: values.password,
          },
        });
      } catch (err) {
        /** */
      }

      actions.setSubmitting(false);
    },
    [],
  );

  useEffect(() => {
    if (data) {
      // Do code login process successfully
    }
  }, [data]);

  useEffect(() => {
    if (!formRef.current) return;
    const err = error?.graphQLErrors[0];

    if (err) {
      const errors = sanitizeValidationError<LoginValidationError>(err);
      formRef.current.setErrors(errors);
    }
  }, [error]);

  return (
    <>
      <LoginForm formRef={formRef} onSubmit={onSubmit} />
    </>
  );
}

export default LoginPage;
