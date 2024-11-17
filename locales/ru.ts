import { LocaleType } from './en'

export const ru: LocaleType = {
  layout: {
    navBar: {
      paymentsList: 'Платежи',
      postsList: 'Посты',
      statistics: 'Статистика',
      usersList: 'Пользователи',
    },
  },
  modal: {
    banUserModal: {
      advertisingPlacement: 'Размещение рекламы',
      anotherReason: 'Другая причина',
      badBehavior: 'Плохое поведение',
      getQuestion: `Вы уверены, что хотите заблокировать пользователя <1></1>`,
      reasonForBan: 'Причина блокировки',
      title: 'Заблокировать пользователя',
    },
    deleteUserModal: {
      getQuestion: (userName: string) =>
        `Вы уверенны, что хотите удалить пользователя ${userName}?`,
      title: 'Удалить пользователя',
    },
    noButton: 'Нет',
    yesButton: 'Да',
  },
  pages: {
    signIn: {
      emailLabel: 'Электронная почта',
      passwordLabel: 'Пароль',
      title: 'Войти',
    },
    user: {
      header: {
        backLink: 'Назад к списку пользователей',
        dateCreation: 'Дата создания профиля',
        userId: 'ID пользователя',
      },
      tabs: {
        follow: {
          tableHead: {
            profileLink: 'Ссылка на профиль',
            subscriptionDate: 'Дата подписки',
            userId: 'ID пользователя',
            userName: 'Имя пользователя',
          },
        },
        followers: {
          emptyTab: 'Пока нет подписчиков',
          title: 'Подписчики',
        },
        following: {
          emptyTab: 'Пока нет подписок',
          title: 'Подписки',
        },
        payments: {
          emptyTab: 'Пока нет платежей',
          tableHead: {
            endDate: 'Дата окончания',
            paymentType: 'Тип оплаты',
            price: 'Стоимость, $',
            startDate: 'Дата оплаты',
            subscriptionType: 'Тип подписки',
          },
          title: 'Платежи',
        },
        uploadPhotos: {
          emptyTab: 'Пока нет фото',
          title: 'Загруженные фото',
        },
      },
    },
    usersList: {
      dropdown: {
        banUser: 'Запрет доступа в системе',
        deleteUser: 'Удалить пользователя',
        moreInfo: 'Дополнительная информация',
      },
      select: {
        blocked: 'Заблокированные',
        notBlocked: 'Не заблокированные',
        notSelected: 'Все пользователи',
      },
      tableHead: {
        dateAdded: 'Дата добавления',
        profileLink: 'Ссылка на профиль',
        userId: 'ID пользователя',
        userName: 'Имя пользователя',
      },
    },
  },
  validation: {
    emailVerification: 'Электронная почта должна соответствовать формату example@example.com',
  },
}
