import { SortActiveIcon, SortDefaultIcon } from '@/shared/assets'
import { useTranslation } from '@/shared/lib/hooks'
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
  const { text } = useTranslation()
  const t = text.pages.user.tabs.followers.tableHead
  const toggleSort = (newSortBy: SortByType) => {
    const newDirection = direction === SortDirection.Asc ? SortDirection.Desc : SortDirection.Asc

    onDirectionChange({ newDirection, newSortBy })
  }

  return (
    <>
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
                {t.subscriptionDate}
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
    </>
  )
}
