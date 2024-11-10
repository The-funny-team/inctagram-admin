import { gql } from '@apollo/client'

export const GET_ALL_USERS = gql(/* GraphQL */ `
  query getAllUsers(
    $pageNumber: Int
    $pageSize: Int
    $sortBy: String
    $sortDirection: SortDirection
    $searchTerm: String
    $statusFilter: UserBlockStatus
  ) {
    getUsers(
      pageNumber: $pageNumber
      pageSize: $pageSize
      sortBy: $sortBy
      sortDirection: $sortDirection
      searchTerm: $searchTerm
      statusFilter: $statusFilter
    ) {
      pagination {
        totalCount
      }
      users {
        userName
        id
        createdAt
        userBan {
          reason
        }
      }
    }
  }
`)
