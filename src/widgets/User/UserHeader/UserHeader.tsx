import { ArrowLeftIcon } from '@/shared/assets/icons/ArrowLeftIcon'
import { ROUTES_URL } from '@/shared/const'
import { useTranslation } from '@/shared/lib/hooks'
import { UserInfo } from '@/widgets/User/UserHeader/UserInfo'
import { Typography } from '@funnyteam/ui-kit'
import { useRouter } from 'next/router'

import s from './UserHeader.module.scss'

export const UserHeader = () => {
  const { text } = useTranslation()
  const t = text.pages.user.header
  const router = useRouter()

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
