import { gql } from '@apollo/client'

export const GET_USER_PERSONAL_INFO = gql(/* GraphQL */ `
  query getUserInfo($id: Int!) {
    getUser(userId: $id) {
      createdAt
      userName
      profile {
        avatars {
          url
        }
      }
    }
  }
`)
