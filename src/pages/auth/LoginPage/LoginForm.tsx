import { Field, Formik, FormikHelpers, FormikProps } from 'formik';
import React from 'react';

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

  return (
    <Formik
      initialValues={initialValues}
      innerRef={formRef}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, isSubmitting, errors }) => (
        <form onSubmit={handleSubmit}>
          {errors?.invalid && <span>{errors.invalid}</span>}

          <Field name="identifier" disabled={isSubmitting} />
          {errors?.identifier && <span>{errors.identifier}</span>}

          <Field name="password" disabled={isSubmitting} />
          {errors?.password && <span>{errors.password}</span>}

          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
        </form>
      )}
    </Formik>
  );
}

export default LoginForm;
