import { useTranslation } from '@/shared/lib/hooks'
import { User } from '@/types'
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

type PropsType = {
  users: Omit<User, 'email' | 'profile'>[]
}

export const UsersListTable = ({ users }: PropsType) => {
  const { text } = useTranslation()
  const t = text.pages.usersList.tableHead

  return (
    <div className={s.tableWrapper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>{t.userId}</TableHeadCell>
            <TableHeadCell>{t.userName}</TableHeadCell>
            <TableHeadCell>{t.profileLink}</TableHeadCell>
            <TableHeadCell>{t.dateAdded}</TableHeadCell>
            <TableHeadCell></TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(user => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.userName}</TableCell>
              <TableCell>{`user/${user.id}`}</TableCell>
              <TableCell>{new Date(user.createdAt).toLocaleDateString('ru-RU')}</TableCell>
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
