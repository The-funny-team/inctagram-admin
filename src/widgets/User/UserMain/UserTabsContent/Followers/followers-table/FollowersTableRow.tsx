import { LINK_TO_PROFILE_PUBLIC_PAGE } from '@/shared/const'
import { Follow } from '@/types'
import { TableCell, TableRow, Typography } from '@funnyteam/ui-kit'

import s from '@/widgets/UsersList/UsersList.module.scss'
type Props = {
  follower: Follow
}
export const FollowersTableRow = ({ follower }: Props) => {
  return (
    <>
      <TableRow key={follower.id}>
        <TableCell>
          <div className={s.idCell}>
            <Typography variant={'regularText14'}>{follower.userId}</Typography>
          </div>
        </TableCell>
        <TableCell>
          <Typography variant={'regularText14'}>{follower.userName}</Typography>
        </TableCell>
        <TableCell>
          <Typography
            as={'a'}
            className={s.linkCell}
            href={`${LINK_TO_PROFILE_PUBLIC_PAGE}/${follower.id}`}
            target={'_blank'}
            variant={'regularText14'}
          >
            {follower.userName}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography variant={'regularText14'}>
            {new Date(follower.createdAt).toLocaleDateString('ru-RU')}
          </Typography>
        </TableCell>
      </TableRow>
    </>
  )
}
