import { BanIcon, DeleteUserIcon, DotsIcon } from '@/shared/assets'
import { useTranslation } from '@/shared/lib/hooks'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Typography,
} from '@funnyteam/ui-kit'

import s from 'src/widgets/UsersListDropdown/ui/UsersListDropdown.module.scss'

type Props = {
  userId: number
}

export const UsersListDropdown = ({ userId }: Props) => {
  const { text } = useTranslation()
  const t = text.pages.usersList.dropdown
  const onDeleteUser = () => {
    console.log('delete user with id=', userId)
  }
  const onBanUser = () => {
    console.log('ban user with id=', userId)
  }
  const onMoreInformation = () => {
    console.log('redirect to users page with id=', userId)
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
          <Typography as={'span'} onClick={onBanUser} variant={'regularText14'}>
            {t.banUser}
          </Typography>
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
