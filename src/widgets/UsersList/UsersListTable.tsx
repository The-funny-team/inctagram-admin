import { SortActiveIcon, SortDefaultIcon } from '@/shared/assets'
import { useTranslation } from '@/shared/lib/hooks'
import { SortDirection, User } from '@/types'
import { UsersListRow } from '@/widgets/UsersList/UsersListRow'
import { Table, TableBody, TableHead, TableHeadCell, TableRow, Typography } from '@funnyteam/ui-kit'

import s from './UsersList.module.scss'

import { SortByType } from './UsersList'

type PropsType = {
  direction: SortDirection
  onDirectionChange: (sortParams: { newDirection: SortDirection; newSortBy: SortByType }) => void
  refetchUsers: () => void
  sortBy: SortByType
  users: Omit<User, 'email' | 'profile'>[]
}

export const UsersListTable = ({
  direction,
  onDirectionChange,
  refetchUsers,
  sortBy,
  users,
}: PropsType) => {
  const { text } = useTranslation()
  const t = text.pages.usersList.tableHead
  const toggleSort = (newSortBy: SortByType) => {
    const newDirection = direction === SortDirection.Asc ? SortDirection.Desc : SortDirection.Asc

    onDirectionChange({ newDirection, newSortBy })
  }

  return (
    <div className={s.tableWrapper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>
              <Typography variant={'boldText14'}>{t.userId}</Typography>
            </TableHeadCell>
            <TableHeadCell>
              <div className={s.sortCell} onClick={() => toggleSort('userName')}>
                <Typography as={'span'} variant={'boldText14'}>
                  {t.userName}
                </Typography>
                {direction === SortDirection.Asc && sortBy === 'userName' ? (
                  <SortActiveIcon />
                ) : (
                  <SortDefaultIcon />
                )}
              </div>
            </TableHeadCell>
            <TableHeadCell>
              <Typography variant={'boldText14'}>{t.profileLink}</Typography>
            </TableHeadCell>
            <TableHeadCell>
              <div className={s.sortCell} onClick={() => toggleSort('createdAt')}>
                <Typography as={'span'} variant={'boldText14'}>
                  {t.dateAdded}
                </Typography>
                {direction === SortDirection.Asc && sortBy === 'createdAt' ? (
                  <SortActiveIcon />
                ) : (
                  <SortDefaultIcon />
                )}
              </div>
            </TableHeadCell>
            <TableHeadCell></TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(user => (
            <UsersListRow key={user.id} refetch={refetchUsers} user={user} />
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
