import { useState } from 'react'

import { useGetFollowersQuery } from '@/queries/user/user.generated'
import { useTranslation } from '@/shared/lib/hooks'
import { SortDirection } from '@/types'
import { SortByType } from '@/widgets/UsersList/UsersList'
import { Table, TableBody, Typography } from '@funnyteam/ui-kit'

import s from './Followers.module.scss'

import { FollowersTableHead, FollowersTableRow } from './followers-table'

type Props = {
  userId: number
}
export const Followers = ({ userId }: Props) => {
  const [sortBy, setSortBy] = useState<SortByType>('createdAt')
  const [sortDirection, setSortDirection] = useState<SortDirection>(SortDirection.Desc)
  const { text } = useTranslation()
  const t = text.pages.user.tabs.followers.emptyTab
  const { data, loading } = useGetFollowersQuery({
    variables: {
      page: 1,
      pageSize: 8,
      sortBy,
      sortDirection,
      userId,
    },
  })

  const followers = data?.getFollowers.items
  const followersCount = data?.getFollowers.totalCount

  const handleDirectionChange = (sortParams: {
    newDirection: SortDirection
    newSortBy: SortByType
  }) => {
    setSortBy(sortParams.newSortBy)
    setSortDirection(sortParams.newDirection)
  }

  return (
    <div className={s.tableWrapper}>
      {!followersCount ? (
        <div style={{ textAlign: 'center' }}>
          <Typography variant={'large'}>{t}</Typography>
        </div>
      ) : (
        <div>
          <Table>
            <FollowersTableHead
              direction={sortDirection}
              onDirectionChange={handleDirectionChange}
              sortBy={sortBy}
            />
            <TableBody>
              {followers?.map(f => <FollowersTableRow follower={f} key={f.id} />)}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  )
}
