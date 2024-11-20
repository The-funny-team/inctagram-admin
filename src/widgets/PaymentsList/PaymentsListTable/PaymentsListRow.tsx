import { SubscriptionPaymentsModel } from '@/types'
import { Avatar, TableCell, TableRow, Typography } from '@funnyteam/ui-kit'

import s from './PaymentsListTable.module.scss'

type PropsType = {
  payment: SubscriptionPaymentsModel
}

export const PaymentsListRow = ({ payment }: PropsType) => {
  const paymentAvatar =
    (payment && payment.avatars && payment.avatars.length !== 0 && payment.avatars[0].url) || ''

  return (
    <>
      <TableRow>
        <TableCell>
          <div className={s.userNameCell}>
            <Avatar size={36} src={paymentAvatar} userName={payment.userName} />
            <Typography variant={'regularText14'}>{payment.userName}</Typography>
          </div>
        </TableCell>
        <TableCell>
          <Typography variant={'regularText14'}>
            {new Date(payment.createdAt).toLocaleDateString('ru-RU')}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography variant={'regularText14'}>{payment.amount}</Typography>
        </TableCell>
        <TableCell>
          <Typography variant={'regularText14'}>{payment.type}</Typography>
        </TableCell>
        <TableCell>
          <Typography variant={'regularText14'}>{payment.paymentMethod}</Typography>
        </TableCell>
      </TableRow>
    </>
  )
}
