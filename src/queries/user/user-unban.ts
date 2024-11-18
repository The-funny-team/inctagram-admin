import { gql } from '@apollo/client'

export const UNBAN_USER = gql(/* GraphQL */ `
  mutation unbanUser($userId: Int!) {
    unbanUser(userId: $userId)
  }
`)
