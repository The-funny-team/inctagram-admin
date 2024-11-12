import { useGetUserInfoQuery } from '@/queries/user/user.generated'
import { useTranslation } from '@/shared/lib/hooks'
import { User } from '@/types'
import { Avatar, Typography } from '@funnyteam/ui-kit'
import { useRouter } from 'next/router'

import s from './UserHeader.module.scss'

export const UserInfo = () => {
  const { text } = useTranslation()
  const t = text.pages.user.header
  const router = useRouter()
  const { id } = router.query
  const userId = id ? Number(id) : NaN
  const { data, loading } = useGetUserInfoQuery({
    variables: {
      id: +userId,
    },
  })
  const userInfo = data ? data.getUser : ({} as User)
  const usersAvatar =
    (userInfo &&
      userInfo.profile &&
      userInfo.profile.avatars &&
      userInfo.profile.avatars.length !== 0 &&
      userInfo.profile.avatars[0].url) ||
    ''

  const onRedirectToProfile = () => {
    window.open(`https://funny-inctagram.site/public-profile/${id}`, '_blank')
  }

  if (loading) {
    return null
  }

  return (
    <div className={s.userInfo}>
      <div className={s.namePart}>
        <Avatar className={s.avatar} size={60} src={usersAvatar} userName={userInfo.userName} />
        <div>
          <Typography variant={'h1'}>{userInfo.userName}</Typography>
          <Typography onClick={onRedirectToProfile} variant={'regularText14'}>
            {'profile link'}
          </Typography>
        </div>
      </div>
      <div className={s.dataPart}>
        <div>
          <Typography variant={'regularText14'}>{t.userId}</Typography>
          <Typography variant={'regularText16'}>{id}</Typography>
        </div>
        <div>
          <Typography variant={'regularText14'}>{t.dateCreation}</Typography>
          <Typography variant={'regularText16'}>
            {new Date(userInfo.createdAt).toLocaleDateString('ru-RU')}
          </Typography>
        </div>
      </div>
    </div>
  )
}
