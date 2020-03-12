import gql from 'graphql-tag';

export const GET_USER_BY_ID = gql`
  query($id: ID!) {
    user(id: $id) {
      username
      id
      created_at
      articles {
        title
        size
        price
        description
        pictureUri
        user {
          username
        }
        image {
          url
        }
      }
    }
  }
`;
