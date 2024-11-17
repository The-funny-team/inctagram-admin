import { gql } from '@apollo/client'

export const BAN_USERS = gql(/* GraphQL */ `
  mutation banUser($banReason: String!, $userId: Int!) {
    banUser(banReason: $banReason, userId: $userId)
  }
`)
