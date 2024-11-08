import { useState } from 'react'

import { BanIcon } from '@/shared/assets/icons/dropdown-icons/BanIcon'
import { DeleteUserIcon } from '@/shared/assets/icons/dropdown-icons/DeleteUserIcon'
import { DotsIcon } from '@/shared/assets/icons/dropdown-icons/DotsIcon'
import { useDebounce } from '@/shared/lib/hooks'
import { UsersListDropdown } from '@/widgets/UsersListDropdown'
import { Input, Pagination, Select, TableEmpty } from '@funnyteam/ui-kit'

import s from './UsersList.module.scss'

import { UserType, UsersListTable } from './UsersListTable'

const selectOptions = [
  { label: 'Not selected', value: 'all' },
  { label: 'Blocked', value: 'blocked' },
  { label: 'Not Blocked', value: 'notBlocked' },
]

const PAGINATION_OPTIONS = [
  { label: '10', value: '10' },
  { label: '25', value: '25' },
  { label: '50', value: '50' },
  { label: '100', value: '100' },
]

export const UsersList = () => {
  const [usersList, setUsersList] = useState<UserType[]>([])
  const [usersStatus, setUsersStatus] = useState<string>('all')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(10)
  const [search, setSearch] = useState<string>('')

  const handlePageSize = (pageSize: string) => {
    setPageSize(+pageSize)
    setCurrentPage(1)
  }

  const handleIsBlocked = (value: string) => {
    setUsersStatus(prevState => value)
  }
  const debounceValue = useDebounce(search, 500)
  const handleSearch = (value: string) => {
    setSearch(prevState => value)
  }

  return (
    <>
      <DotsIcon />
      <DeleteUserIcon />
      <BanIcon />
      <UsersListDropdown userId={25} />
      <main>
        <div className={s.wrapper}>
          <div className={s.filters}>
            <div className={s.filtersInput}>
              <Input onValueChange={handleSearch} type={'search'} value={search} />
            </div>
            <Select onValueChange={handleIsBlocked} options={selectOptions} value={usersStatus} />
          </div>
          {usersList.length ? (
            <div>
              <UsersListTable users={usersList} />
              <div className={s.pagination}>
                <Pagination
                  currentPage={currentPage}
                  onChangePage={setCurrentPage}
                  onValueChange={handlePageSize}
                  options={PAGINATION_OPTIONS}
                  pageSize={pageSize}
                  totalCount={usersList.length}
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
