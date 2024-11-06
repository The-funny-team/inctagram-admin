import { useState } from 'react'

import { Input, Pagination, Select, TableEmpty } from '@funnyteam/ui-kit'

import { UserType, UsersListTable } from './UsersListTable'

const usersList: UserType[] = [
  {
    dateAdded: '2022-12-14T18:57:56.462Z',
    profileLink: 'https://google.com',
    userId: '132',
    userName: 'Aleksandr',
  },
  {
    dateAdded: '2024-10-28T18:57:56.462Z',
    profileLink: 'https://facebook.com',
    userId: '133',
    userName: 'Nikolay',
  },
  {
    dateAdded: '2022-07-23T18:57:56.462Z',
    profileLink: 'https://instagram.com',
    userId: '131',
    userName: 'Vitaliy',
  },
]

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
  const [usersStatus, setUsersStatus] = useState<string>('all')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(10)

  const handlePageSize = (pageSize: string) => {
    setPageSize(+pageSize)
    setCurrentPage(1)
  }

  const handleIsBlocked = (value: string) => {
    setUsersStatus(prevState => value)
  }

  return (
    <>
      <main>
        <div style={{ padding: '60px 0 0 24px' }}>
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              gap: '95px',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ maxWidth: '620px', width: '100%' }}>
              <Input style={{ width: '100%' }} type={'search'} />
            </div>
            <Select onValueChange={handleIsBlocked} options={selectOptions} value={usersStatus} />
          </div>
          {usersList.length ? (
            <div>
              <UsersListTable users={usersList} />
              <div style={{ paddingTop: '35px' }}>
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
