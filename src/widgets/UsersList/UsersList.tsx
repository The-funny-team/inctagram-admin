import { useState } from 'react'

import { useGetAllUsersQuery } from '@/queries/users/users.generated'
import { useDebounce, useTranslation } from '@/shared/lib/hooks'
import { SortDirection, User, UserBlockStatus } from '@/types'
import { Input, Pagination, Select } from '@funnyteam/ui-kit'

import s from './UsersList.module.scss'

import { UsersListTable } from './UsersListTable'

export type SortByType = 'createdAt' | 'userName'

const PAGINATION_OPTIONS = [
  { label: '8', value: '8' },
  { label: '20', value: '20' },
  { label: '50', value: '50' },
  { label: '100', value: '100' },
]

export const UsersList = () => {
  const [sortBy, setSortBy] = useState<SortByType>('createdAt')
  const [sortDirection, setSortDirection] = useState<SortDirection>(SortDirection.Desc)
  const [usersStatus, setUsersStatus] = useState<UserBlockStatus>(UserBlockStatus.All)
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(8)
  const [searchTerm, setSearch] = useState<string>('')
  const debounceValue = useDebounce(searchTerm, 500)
  const { data, error, loading } = useGetAllUsersQuery({
    variables: {
      pageNumber,
      pageSize,
      searchTerm: debounceValue || '',
      sortBy,
      sortDirection,
      statusFilter: usersStatus,
    },
  })
  const usersList = data?.getUsers.users as Omit<User, 'email' | 'profile'>[]
  const usersCount = data?.getUsers.pagination.totalCount
  const { text } = useTranslation()
  const t = text.pages.usersList.select

  const selectOptions = [
    { label: t.notSelected, value: UserBlockStatus.All },
    { label: t.blocked, value: UserBlockStatus.Blocked },
    { label: t.notBlocked, value: UserBlockStatus.Unblocked },
  ]

  const handlePageSize = (pageSize: string) => {
    setPageSize(Number(pageSize))
    setPageNumber(1)
  }

  const handleIsBlocked = (value: string) => {
    setPageNumber(1)
    setUsersStatus(prevState => value as UserBlockStatus)
  }
  const handleSearch = (value: string) => {
    setPageNumber(1)
    setSearch(prevState => value)
  }

  const handleDirectionChange = (sortParams: {
    newDirection: SortDirection
    newSortBy: SortByType
  }) => {
    setSortBy(sortParams.newSortBy)
    setSortDirection(sortParams.newDirection)
  }

  return (
    <>
      <main>
        <div className={s.wrapper}>
          <div className={s.filters}>
            <div className={s.filtersInput}>
              <Input onValueChange={handleSearch} type={'search'} value={searchTerm} />
            </div>
            <Select onValueChange={handleIsBlocked} options={selectOptions} value={usersStatus} />
          </div>
          {usersList && (
            <div>
              <UsersListTable
                direction={sortDirection}
                onDirectionChange={handleDirectionChange}
                sortBy={sortBy}
                users={usersList}
              />
              <div className={s.pagination}>
                <Pagination
                  currentPage={pageNumber}
                  onChangePage={setPageNumber}
                  onValueChange={handlePageSize}
                  options={PAGINATION_OPTIONS}
                  pageSize={pageSize}
                  totalCount={usersCount}
                />
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  )
}
