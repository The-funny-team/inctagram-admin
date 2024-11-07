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
      getQuestion: `Are you sure to ban this user, <1></1>`,
      reasonForBan: 'Reason for ban',
      title: 'Ban user',
    },
    noButton: 'No',
    yesButton: 'Yes',
  },
  pages: {
    signIn: {
      emailLabel: 'Email',
      passwordLabel: 'Password',
      title: 'Sign In',
    },
    usersList: {
      tableHead: {
        dateAdded: 'Date added',
        profileLink: 'Profile Link',
        userId: 'User ID',
        userName: 'Username',
      },
        dropdown: {
            banUser: 'Ban in the system',
            deleteUser: 'Delete User',
            moreInfo: 'More Information',
        },
    },
  },
  validation: {
    emailVerification: 'The email must match the format example@example.com',
  },
}
export type LocaleType = typeof en
