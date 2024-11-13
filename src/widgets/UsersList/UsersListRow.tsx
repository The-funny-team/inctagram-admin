import { useState } from 'react'

import { DeleteUserModal } from '@/features/user-modals/DeleteUserModal'
import { BanIcon } from '@/shared/assets'
import { LINK_TO_PROFILE_PUBLIC_PAGE } from '@/shared/const'
import { useTranslation } from '@/shared/lib/hooks'
import { User } from '@/types'
import { UsersListDropdown } from '@/widgets/UsersListDropdown'
import { TableCell, TableRow, Typography } from '@funnyteam/ui-kit'

import s from './UsersList.module.scss'

type PropsType = {
  user: Omit<User, 'email' | 'profile'>
}

export const UsersListRow = ({ user }: PropsType) => {
  const { text } = useTranslation()
  const [isOpenDeleteUserModal, setIsOpenDeleteUserModal] = useState(false)
  const deleteUserHandler = () => {
    setIsOpenDeleteUserModal(true)
  }
  const banUserHandler = () => {}

  return (
    <>
      <TableRow key={user.id}>
        <TableCell>
          <div className={s.idCell}>
            {user.userBan?.reason && <BanIcon className={s.banIcon} />}
            <Typography as={'span'} variant={'regularText14'}>
              {user.id}
            </Typography>
          </div>
        </TableCell>
        <TableCell>
          <Typography as={'span'} variant={'regularText14'}>
            {user.userName}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography
            as={'a'}
            className={s.linkCell}
            href={`${LINK_TO_PROFILE_PUBLIC_PAGE}/${user.id}`}
            target={'_blank'}
            variant={'regularText14'}
          >
            {user.userName}_link
          </Typography>
        </TableCell>
        <TableCell>
          <Typography as={'span'} variant={'regularText14'}>
            {new Date(user.createdAt).toLocaleDateString('ru-RU')}
          </Typography>
        </TableCell>
        <TableCell>
          <div className={s.dropDownCell}>
            <UsersListDropdown
              onBanUser={banUserHandler}
              onDeleteUser={deleteUserHandler}
              userId={user.id}
            />
          </div>
        </TableCell>
      </TableRow>
      {isOpenDeleteUserModal && (
        <DeleteUserModal
          isOpenDeleteUserModal={isOpenDeleteUserModal}
          setIsOpenDeleteUserModal={setIsOpenDeleteUserModal}
          userId={user.id}
          userName={user.userName}
        />
      )}
    </>
  )
}
