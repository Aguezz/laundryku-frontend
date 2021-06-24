import { gql } from '@apollo/client';

export const ME = gql`
  query {
    me {
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
`;
