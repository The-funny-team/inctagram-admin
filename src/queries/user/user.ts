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

export const GET_UPLOADED_PHOTOS = gql(/* GraphQL */ `
  query getUploadedPhotos($userId: Int!, $endCursorId: Int) {
    getPostsByUser(endCursorId: $endCursorId, userId: $userId) {
      totalCount
      items {
        id
        url
      }
    }
  }
`)

export const GET_PAYMENTS = gql(/* GraphQL */ `
  query getPayments(
    $userId: Int!
    $pageSize: Int
    $page: Int
    $sortBy: String
    $sortDirection: SortDirection
  ) {
    getPaymentsByUser(
      userId: $userId
      pageSize: $pageSize
      pageNumber: $page
      sortBy: $sortBy
      sortDirection: $sortDirection
    ) {
      totalCount
      items {
        dateOfPayment
        endDate
        price
        paymentType
        type
        id
      }
    }
  }
`)
