import s from './User.module.scss'

import { UserHeader } from './UserHeader'
import { UserMain } from './UserMain'

export const User = () => {
  return (
    <div className={s.wrapper}>
      <UserHeader />
      <UserMain />
    </div>
  )
}
