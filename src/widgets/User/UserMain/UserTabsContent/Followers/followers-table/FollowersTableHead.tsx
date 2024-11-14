import { SortActiveIcon, SortDefaultIcon } from '@/shared/assets'
import { SortDirection } from '@/types'
import { SortByType } from '@/widgets/UsersList/UsersList'
import { TableHead, TableHeadCell, TableRow, Typography } from '@funnyteam/ui-kit'

import s from './FollowersTable.module.scss'

type Props = {
  direction: SortDirection
  onDirectionChange: (sortParams: { newDirection: SortDirection; newSortBy: SortByType }) => void
  sortBy: SortByType
}

export const FollowersTableHead = ({ direction, onDirectionChange, sortBy }: Props) => {
  const toggleSort = (newSortBy: SortByType) => {
    const newDirection = direction === SortDirection.Asc ? SortDirection.Desc : SortDirection.Asc

    onDirectionChange({ newDirection, newSortBy })
  }

  return (
    <TableHead>
      <TableRow>
        <TableHeadCell>
          <Typography variant={'boldText14'}>UserId</Typography>
        </TableHeadCell>
        <TableHeadCell>
          <div className={s.sortCell} onClick={() => toggleSort('userName')}>
            <Typography as={'span'} variant={'boldText14'}>
              UserName
            </Typography>
            {direction === SortDirection.Asc && sortBy === 'userName' ? (
              <SortActiveIcon />
            ) : (
              <SortDefaultIcon />
            )}
          </div>
        </TableHeadCell>
        <TableHeadCell>
          <Typography variant={'boldText14'}>profileLink</Typography>
        </TableHeadCell>
        <TableHeadCell>
          <div className={s.sortCell} onClick={() => toggleSort('createdAt')}>
            <Typography as={'span'} variant={'boldText14'}>
              Subscription Date
            </Typography>
            {direction === SortDirection.Asc && sortBy === 'createdAt' ? (
              <SortActiveIcon />
            ) : (
              <SortDefaultIcon />
            )}
          </div>
        </TableHeadCell>
      </TableRow>
    </TableHead>
  )
}
