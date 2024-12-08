import { ArrowLeftIcon } from '@/shared/assets/icons/ArrowLeftIcon'
import { ROUTES_URL } from '@/shared/const'
import { useTranslation } from '@/shared/lib/hooks'
import { UserInfo } from '@/widgets/User/UserHeader/UserInfo'
import { Typography } from '@funnyteam/ui-kit'

import s from './UserHeader.module.scss'

export const UserHeader = () => {
  const { router, text } = useTranslation()
  const t = text.pages.user.header

  const redirectHandler = () => {
    void router.push(ROUTES_URL.USERS_LIST)
  }

  return (
    <div className={s.root}>
      <button className={s.link} onClick={redirectHandler} type={'button'}>
        <ArrowLeftIcon />
        <Typography as={'span'} variant={'regularText14'}>
          {t.backLink}
        </Typography>
      </button>
      <UserInfo />
    </div>
  )
}
