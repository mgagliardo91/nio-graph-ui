import { gql } from '@apollo/client';

export const SearchRunnable = gql`
  query searchRunnable($name:String!) {
    Runnable(filter:{name_starts_with:$name}) {
      name
      repository
      version
      facility {
        name
      }
    }
  }
`;