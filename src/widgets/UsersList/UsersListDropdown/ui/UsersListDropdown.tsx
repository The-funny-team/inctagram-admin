import { BanIcon, DeleteUserIcon, DotsIcon } from '@/shared/assets'
import { ROUTES_URL } from '@/shared/const'
import { useTranslation } from '@/shared/lib/hooks'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Typography,
} from '@funnyteam/ui-kit'

import s from './UsersListDropdown.module.scss'

type Props = {
  isUserBan: boolean
  onBanUser: () => void
  onDeleteUser: () => void
  onUnBanUser: () => void
  userId: number
}

export const UsersListDropdown = ({
  isUserBan,
  onBanUser,
  onDeleteUser,
  onUnBanUser,
  userId,
}: Props) => {
  const { router, text } = useTranslation()
  const t = text.pages.usersList.dropdown

  const onMoreInformation = () => {
    void router.push(`${ROUTES_URL.USER}/${userId}`)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={s.trigger}>
        <DotsIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent className={s.content}>
        <DropdownMenuItem className={s.menuItem}>
          <DeleteUserIcon />
          <Typography as={'span'} onClick={onDeleteUser} variant={'regularText14'}>
            {t.deleteUser}
          </Typography>
        </DropdownMenuItem>
        <DropdownMenuItem className={s.menuItem}>
          <BanIcon />
          {!isUserBan ? (
            <Typography as={'span'} onClick={onBanUser} variant={'regularText14'}>
              {t.banUser}
            </Typography>
          ) : (
            <Typography as={'span'} onClick={onUnBanUser} variant={'regularText14'}>
              {t.uBanUser}
            </Typography>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem className={s.menuItem}>
          <DotsIcon />
          <Typography as={'span'} onClick={onMoreInformation} variant={'regularText14'}>
            {t.moreInfo}
          </Typography>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
