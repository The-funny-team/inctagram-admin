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
    deleteUserModal: {
      getQuestion: (userName: string) => `Are you sure to delete user ${userName}?`,
      title: 'Delete user',
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
    user: {
      tabs: {
        followers: 'Followers',
        following: 'Following',
        payments: 'Payments',
        uploadPhotos: 'Uploaded photos',
      },
    },
    usersList: {
      dropdown: {
        banUser: 'Ban in the system',
        deleteUser: 'Delete User',
        moreInfo: 'More Information',
      },
      select: {
        blocked: 'Blocked',
        notBlocked: 'Not Blocked',
        notSelected: 'Not selected',
      },
      tableHead: {
        dateAdded: 'Date added',
        profileLink: 'Profile Link',
        userId: 'User ID',
        userName: 'Username',
      },
    },
  },
  validation: {
    emailVerification: 'The email must match the format example@example.com',
  },
}
export type LocaleType = typeof en
