import { useState } from 'react'

import { SortDirection } from '@/types'
import { SortByType } from '@/widgets/UsersList/UsersList'
import { Table, TableBody } from '@funnyteam/ui-kit'

import s from './Followers.module.scss'

import { FollowersTableHead, FollowersTableRow } from './followers-table'

export const Followers = () => {
  const [sortBy, setSortBy] = useState<SortByType>('createdAt')
  const [sortDirection, setSortDirection] = useState<SortDirection>(SortDirection.Desc)

  const handleDirectionChange = (sortParams: {
    newDirection: SortDirection
    newSortBy: SortByType
  }) => {
    setSortBy(sortParams.newSortBy)
    setSortDirection(sortParams.newDirection)
  }

  return (
    <div className={s.tableWrapper}>
      <Table>
        <FollowersTableHead
          direction={sortDirection}
          onDirectionChange={handleDirectionChange}
          sortBy={sortBy}
        />
        <TableBody>{/*<FollowersTableRow />*/}</TableBody>
      </Table>
    </div>
  )
}
