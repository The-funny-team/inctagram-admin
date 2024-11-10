import { useState } from 'react'

import { useGetAllUsersQuery } from '@/queries/users/users.generated'
import { useDebounce, useTranslation } from '@/shared/lib/hooks'
import { SortDirection, User, UserBlockStatus } from '@/types'
import { Input, Pagination, Select, TableEmpty } from '@funnyteam/ui-kit'

import s from './UsersList.module.scss'

import { UsersListTable } from './UsersListTable'

const PAGINATION_OPTIONS = [
  { label: '8', value: '8' },
  { label: '20', value: '20' },
  { label: '50', value: '50' },
  { label: '100', value: '100' },
]

export const UsersList = () => {
  const [usersStatus, setUsersStatus] = useState<UserBlockStatus>(UserBlockStatus.All)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(8)
  const [search, setSearch] = useState<string>('')
  const { data, loading, error } = useGetAllUsersQuery({
    variables: {
      pageNumber: currentPage,
      pageSize: pageSize,
      sortBy: 'createdAt',
      sortDirection: SortDirection.Desc,
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
    setCurrentPage(1)
  }

  const handleIsBlocked = (value: string) => {
    setUsersStatus(prevState => value as UserBlockStatus)
  }
  const debounceValue = useDebounce(search, 500)
  const handleSearch = (value: string) => {
    setSearch(prevState => value)
  }

  return (
    <>
      <main>
        <div className={s.wrapper}>
          <div className={s.filters}>
            <div className={s.filtersInput}>
              <Input onValueChange={handleSearch} type={'search'} value={search} />
            </div>
            <Select onValueChange={handleIsBlocked} options={selectOptions} value={usersStatus} />
          </div>
          {usersList?.length ? (
            <div>
              <UsersListTable users={usersList} />
              <div className={s.pagination}>
                <Pagination
                  currentPage={currentPage}
                  onChangePage={setCurrentPage}
                  onValueChange={handlePageSize}
                  options={PAGINATION_OPTIONS}
                  pageSize={pageSize}
                  totalCount={usersCount}
                />
              </div>
            </div>
          ) : (
            <TableEmpty message={'There is no users'} />
          )}
        </div>
      </main>
    </>
  )
}
