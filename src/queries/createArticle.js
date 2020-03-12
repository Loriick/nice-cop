import gql from 'graphql-tag';

export const CREATE_ARTICLE = gql`
  mutation CREATE_ARTICLE(
    $title: String!
    $size: String
    $description: String
    $category: ENUM_ARTICLES_CATEGORY
    $price: Float
    $state: ENUM_ARTICLES_STATE
    $pictureUri: String
    $user: ID!
  ) {
    createArticles(
      input: {
        data: {
          title: $title
          size: $size
          description: $description
          category: $category
          price: $price
          state: $state
          user: $user
          pictureUri: $pictureUri
        }
      }
    ) {
      article {
        id
        title
        price
        state
        size
        category
        description
        image {
          url
        }
        pictureUri
        created_at
        user {
          username
        }
      }
    }
  }
`;
