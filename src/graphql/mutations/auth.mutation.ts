import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation Login($identifier: String!, $password: String!) {
    login(input: { identifier: $identifier, password: $password }) {
      jwt
      user {
        id
        username
        email
        name
        phone_number
        profile_photo
        address
        role {
          type
          name
        }
      }
    }
  }
`;
