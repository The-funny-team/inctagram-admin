import { BanIcon, SortActiveIcon, SortDefaultIcon } from '@/shared/assets'
import { ROUTES_URL } from '@/shared/const'
import { useTranslation } from '@/shared/lib/hooks'
import { SortDirection, User } from '@/types'
import { UsersListDropdown } from '@/widgets/UsersListDropdown'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Typography,
} from '@funnyteam/ui-kit'

import s from './UsersList.module.scss'

import { SortByType } from './UsersList'

type PropsType = {
  direction: SortDirection
  onDirectionChange: (sortParams: { newDirection: SortDirection; newSortBy: SortByType }) => void
  sortBy: SortByType
  users: Omit<User, 'email' | 'profile'>[]
}

export const UsersListTable = ({ direction, onDirectionChange, sortBy, users }: PropsType) => {
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
                  href={`${ROUTES_URL.USER}/${user.id}`}
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
                  <UsersListDropdown userId={user.id} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
