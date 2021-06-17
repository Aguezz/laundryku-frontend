import { GraphQLError } from 'graphql';

interface ValidationError {
  code: string;
  exception: {
    code: number;
    data: {
      statusCode: number;
      error: string;
      message: Array<{
        messages: Array<{
          id: string;
          message: string;
        }>;
      }>;
      data: Array<{
        messages: Array<{
          id: string;
          message: string;
        }>;
      }>;
    };
    stacktrace: Array<string>;
  };
}

export function sanitizeValidationError<T extends { [key: string]: string }>(
  err: GraphQLError,
): T {
  const errors: { [key: string]: string } = {};

  const formError = err.extensions as ValidationError;
  formError?.exception.data.data.forEach(({ messages }) => {
    messages.forEach(({ id, message }) => {
      const key = id.split('.')[3];
      if (key) errors[key] = message;
    });
  });

  return errors as T;
}
