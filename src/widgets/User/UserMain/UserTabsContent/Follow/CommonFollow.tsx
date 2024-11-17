import { useState } from 'react'

import { PAGINATION_OPTIONS } from '@/shared/const'
import { Loader } from '@/shared/ui/Loader'
import { Follow, SortDirection } from '@/types'
import {
  FollowTableHead,
  FollowTableRow,
} from '@/widgets/User/UserMain/UserTabsContent/Follow/follow-table'
import { SortByType } from '@/widgets/UsersList/UsersList'
import { Pagination, Table, TableBody, Typography } from '@funnyteam/ui-kit'

import s from './CommonFollow.module.scss'

type Props = {
  emptyTab: string
  followQuery: Function
  userId: number
}
export const CommonFollow = ({ emptyTab, followQuery, userId }: Props) => {
  const [sortBy, setSortBy] = useState<SortByType>('createdAt')
  const [sortDirection, setSortDirection] = useState<SortDirection>(SortDirection.Desc)
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(8)
  const { data, loading } = followQuery({
    variables: {
      page: pageNumber,
      pageSize,
      sortBy,
      sortDirection,
      userId,
    },
  })
  const followItems = data?.getFollowing
    ? data?.getFollowing.items
    : data?.getFollowers.items || ({} as Array<Follow>)
  const followCount = data?.getFollowing
    ? data?.getFollowing.totalCount
    : data?.getFollowers.totalCount || 0
  const handleDirectionChange = (sortParams: {
    newDirection: SortDirection
    newSortBy: SortByType
  }) => {
    setSortBy(sortParams.newSortBy)
    setSortDirection(sortParams.newDirection)
  }

  const handlePageSize = (pageSize: string) => {
    setPageSize(Number(pageSize))
    setPageNumber(1)
  }

  if (loading) {
    return <Loader />
  }

  return (
    <div className={s.tableWrapper}>
      {!followCount ? (
        <div style={{ textAlign: 'center' }}>
          <Typography variant={'large'}>{emptyTab}</Typography>
        </div>
      ) : (
        <div>
          <Table>
            <FollowTableHead
              direction={sortDirection}
              onDirectionChange={handleDirectionChange}
              sortBy={sortBy}
            />
            <TableBody>
              {followItems?.map((f: Follow) => <FollowTableRow follower={f} key={f.id} />)}
            </TableBody>
          </Table>
          <div className={s.pagination}>
            <Pagination
              currentPage={pageNumber}
              onChangePage={setPageNumber}
              onValueChange={handlePageSize}
              options={PAGINATION_OPTIONS}
              pageSize={pageSize}
              totalCount={followCount}
            />
          </div>
        </div>
      )}
    </div>
  )
}
