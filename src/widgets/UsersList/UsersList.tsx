import { UserType, UsersListTable } from '@/widgets/UsersList/UsersListTable'
import { Input, Select } from '@funnyteam/ui-kit'

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
  { label: 'Blocked', value: 'blocked' },
  { label: 'Not Blocked', value: 'notBlocked' },
]

export const UsersList = () => {
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
            <Select options={selectOptions} placeholder={'Not selected'} />
          </div>
          <UsersListTable users={usersList} />
        </div>
      </main>
    </>
  )
}
