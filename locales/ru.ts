
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
        dropdown: {
            banUser: 'Запрет доступа в системе',
            deleteUser: 'Удалить пользователя',
            moreInfo: 'Дополнительная информация',
        },
    },
  },
  validation: {
    emailVerification: 'Электронная почта должна соответствовать формату example@example.com',
  },
}
