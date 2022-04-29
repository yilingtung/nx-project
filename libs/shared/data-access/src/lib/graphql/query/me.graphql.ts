import { gql } from '@apollo/client';

export const ME_QUERY = gql`
  query Me {
    Me {
      id
      customId
      email
      name
      avatar
      organization
      position
      createdAt
    }
  }
`;
