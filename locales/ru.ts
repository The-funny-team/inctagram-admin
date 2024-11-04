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
      getQuestion: (name: string) => `Вы уверены, что хотите заблокировать пользователя ${name}?`,
      reasonForBan: 'Причина блокировки',
      title: 'Заблокировать пользователя',
    },
    noButton: 'Нет',
    yesButton: 'Да',
  },
}
