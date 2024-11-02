import { useTranslation } from '@/shared/lib/hooks'
import {
  DropdownMenu,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from '@funnyteam/ui-kit'

import s from './UsersList.module.scss'

export type UserType = {
  dateAdded: string
  profileLink: string
  userId: string
  userName: string
}
type PropsType = {
  users: UserType[]
}

export const UsersListTable = ({ users }: PropsType) => {
  const { text } = useTranslation()

  return (
    <div className={s.tableWrapper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>User ID</TableHeadCell>
            <TableHeadCell>Username</TableHeadCell>
            <TableHeadCell>Profile link</TableHeadCell>
            <TableHeadCell>Date added</TableHeadCell>
            <TableHeadCell></TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(user => (
            <TableRow key={user.userId}>
              <TableCell>{user.userId}</TableCell>
              <TableCell>{user.userName}</TableCell>
              <TableCell>{user.profileLink}</TableCell>
              <TableCell>{new Date(user.dateAdded).toLocaleDateString('ru-RU')}</TableCell>
              <TableCell>
                <DropdownMenu />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
