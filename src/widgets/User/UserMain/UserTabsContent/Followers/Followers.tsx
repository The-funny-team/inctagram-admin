import { useState } from 'react'

import { useGetFollowersQuery } from '@/queries/user/user.generated'
import { PAGINATION_OPTIONS } from '@/shared/const'
import { useTranslation } from '@/shared/lib/hooks'
import { Loader } from '@/shared/ui/Loader'
import { SortDirection } from '@/types'
import { SortByType } from '@/widgets/UsersList/UsersList'
import { Pagination, Table, TableBody, Typography } from '@funnyteam/ui-kit'

import s from './Followers.module.scss'

import { FollowersTableHead, FollowersTableRow } from './followers-table'

type Props = {
  userId: number
}
export const Followers = ({ userId }: Props) => {
  const [sortBy, setSortBy] = useState<SortByType>('createdAt')
  const [sortDirection, setSortDirection] = useState<SortDirection>(SortDirection.Desc)
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(8)
  const { text } = useTranslation()
  const t = text.pages.user.tabs.followers.emptyTab
  const { data, loading } = useGetFollowersQuery({
    variables: {
      page: pageNumber,
      pageSize,
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

  const handlePageSize = (pageSize: string) => {
    setPageSize(Number(pageSize))
    setPageNumber(1)
  }

  if (loading) {
    return <Loader />
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
          <div className={s.pagination}>
            <Pagination
              currentPage={pageNumber}
              onChangePage={setPageNumber}
              onValueChange={handlePageSize}
              options={PAGINATION_OPTIONS}
              pageSize={pageSize}
              totalCount={followersCount}
            />
          </div>
        </div>
      )}
    </div>
  )
}
