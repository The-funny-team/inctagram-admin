// eslint-disable-next-line import/namespace
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
    usersList: {
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
