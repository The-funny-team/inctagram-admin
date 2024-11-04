export const en = {
  layout: {
    navBar: {
      paymentsList: 'Payments list',
      postsList: 'Posts list',
      statistics: 'Statistics',
      usersList: 'Users list',
    },
  },
  modal: {
    banUserModal: {
      advertisingPlacement: 'Advertising placement',
      anotherReason: 'Another reason',
      badBehavior: 'Bad behavior',
      getQuestion: (name: string) => `Are you sure to ban this user, ${name}?`,
      reasonForBan: 'Reason for ban',
      title: 'Ban user',
    },
    noButton: 'No',
    yesButton: 'Yes',
  },
}
export type LocaleType = typeof en
