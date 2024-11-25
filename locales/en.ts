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
      getQuestion: `Are you sure you want to ban this user, <1></1>`,
      reasonForBan: 'Reason for ban',
      title: 'Ban user',
    },
    deleteUserModal: {
      getQuestion: (userName: string) => `Are you sure to delete user ${userName}?`,
      title: 'Delete user',
    },
    noButton: 'No',
    unBanUserModal: {
      getQuestion: `Are you sure want to un-ban, <1></1>`,
      title: 'Un-ban user',
    },
    yesButton: 'Yes',
  },
  pages: {
    payments: {
      tableHead: {
        amount: 'Amount, $',
        dateAdded: 'Date added',
        paymentMethod: 'Payment Method',
        subscription: 'Subscription',
        userName: 'Username',
      },
    },
    posts: {
      postDescription: {
        fullText: 'Show more',
        shortText: 'Hide',
      },
    },
    signIn: {
      emailLabel: 'Email',
      passwordLabel: 'Password',
      title: 'Sign In',
    },
    user: {
      header: {
        backLink: 'Back to Users List',
        dateCreation: 'Profile Creation Date',
        userId: 'UserID',
      },
      tabs: {
        follow: {
          tableHead: {
            profileLink: 'Profile link',
            subscriptionDate: 'Subscription Date',
            userId: 'User ID',
            userName: 'Username',
          },
        },
        followers: {
          emptyTab: 'No followers yet',
          title: 'Followers',
        },
        following: {
          emptyTab: 'No following yet',
          title: 'Following',
        },
        payments: {
          emptyTab: 'No payments yet',
          tableHead: {
            endDate: 'End date of subscription',
            paymentType: 'Payment Type',
            price: 'Amount, $',
            startDate: 'Date of Payment',
            subscriptionType: 'Subscription Type',
          },
          title: 'Payments',
        },
        uploadPhotos: {
          emptyTab: 'No photos yet',
          title: 'Uploaded photos',
        },
      },
    },
    usersList: {
      dropdown: {
        banUser: 'Ban in the system',
        deleteUser: 'Delete User',
        moreInfo: 'More Information',
        uBanUser: 'Un-ban in the system',
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
