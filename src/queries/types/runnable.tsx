/* eslint-disable */
import * as Types from '../../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type SearchRunnableQueryVariables = Types.Exact<{
  name: Types.Scalars['String'];
}>;


export type SearchRunnableQuery = (
  { __typename?: 'Query' }
  & { Runnable?: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'Runnable' }
    & Pick<Types.Runnable, 'name' | 'repository' | 'version'>
    & { facility?: Types.Maybe<(
      { __typename?: 'Facility' }
      & Pick<Types.Facility, 'name'>
    )> }
  )>>> }
);


export const SearchRunnableDocument = gql`
    query searchRunnable($name: String!) {
  Runnable(filter: {name_starts_with: $name}) {
    name
    repository
    version
    facility {
      name
    }
  }
}
    `;

/**
 * __useSearchRunnableQuery__
 *
 * To run a query within a React component, call `useSearchRunnableQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchRunnableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchRunnableQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useSearchRunnableQuery(baseOptions?: Apollo.QueryHookOptions<SearchRunnableQuery, SearchRunnableQueryVariables>) {
        return Apollo.useQuery<SearchRunnableQuery, SearchRunnableQueryVariables>(SearchRunnableDocument, baseOptions);
      }
export function useSearchRunnableLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchRunnableQuery, SearchRunnableQueryVariables>) {
          return Apollo.useLazyQuery<SearchRunnableQuery, SearchRunnableQueryVariables>(SearchRunnableDocument, baseOptions);
        }
export type SearchRunnableQueryHookResult = ReturnType<typeof useSearchRunnableQuery>;
export type SearchRunnableLazyQueryHookResult = ReturnType<typeof useSearchRunnableLazyQuery>;
export type SearchRunnableQueryResult = Apollo.QueryResult<SearchRunnableQuery, SearchRunnableQueryVariables>;