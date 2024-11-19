import { useState } from 'react'

import { BanUserModal, DeleteUserModal, UnBanModal } from '@/features/user-modals'
import { BanIcon } from '@/shared/assets'
import { LINK_TO_PROFILE_PUBLIC_PAGE } from '@/shared/const'
import { User } from '@/types'
import { UsersListDropdown } from '@/widgets/UsersList/UsersListDropdown'
import { TableCell, TableRow, Typography } from '@funnyteam/ui-kit'

import s from './UsersList.module.scss'

type PropsType = {
  user: Omit<User, 'email' | 'profile'>
}

export const UsersListRow = ({ user }: PropsType) => {
  const [isOpenDeleteUserModal, setIsOpenDeleteUserModal] = useState(false)
  const [isOpenBanUserModal, setIsOpenBanUserModal] = useState(false)
  const [isOpenUnBanUserModal, setIsOpenUnBanUserModal] = useState(false)
  const [isShowBanIcon, setIsShowBanIcon] = useState<boolean>(!!user.userBan?.reason)
  const showBanIconHandler = (value: boolean) => {
    setIsShowBanIcon(value)
  }
  const deleteUserHandler = () => {
    setIsOpenDeleteUserModal(true)
  }
  const banUserHandler = () => {
    setIsOpenBanUserModal(true)
  }
  const unBanUserHandler = () => {
    setIsOpenUnBanUserModal(true)
  }

  return (
    <>
      <TableRow key={user.id}>
        <TableCell>
          <div className={s.idCell}>
            {isShowBanIcon && <BanIcon className={s.banIcon} />}
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
              isUserBan={Boolean(user.userBan?.reason)}
              onBanUser={banUserHandler}
              onDeleteUser={deleteUserHandler}
              onUnBanUser={unBanUserHandler}
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
      {isOpenBanUserModal && (
        <BanUserModal
          isOpenBanModal={isOpenBanUserModal}
          setIsOpenBanModal={setIsOpenBanUserModal}
          userId={user.id}
          userName={user.userName}
        />
      )}
      {isOpenUnBanUserModal && (
        <UnBanModal
          isOpenUnBanModal={isOpenUnBanUserModal}
          setIsOpenUnBanModal={setIsOpenUnBanUserModal}
          setShowBanIcon={showBanIconHandler}
          userId={user.id}
          userName={user.userName}
        />
      )}
    </>
  )
}
