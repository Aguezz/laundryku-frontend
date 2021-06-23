import { gql } from '@apollo/client';

export const LOGIN = gql`
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
