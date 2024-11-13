import { useTranslation } from '@/shared/lib/hooks'
import { SubscriptionByPaymentModel } from '@/types'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Typography,
} from '@funnyteam/ui-kit'

import s from './Payments.module.scss'

type Props = {
  payments: Omit<SubscriptionByPaymentModel, 'businessAccountId' | 'payments' | 'status'>[]
}

export const PaymentsListTable = ({ payments }: Props) => {
  const { text } = useTranslation()
  const t = text.pages.user.tabs.payments.tableHead

  return (
    <div className={s.tableWrapper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>
              <Typography variant={'boldText14'}>{t.startDate}</Typography>
            </TableHeadCell>
            <TableHeadCell>
              <Typography variant={'boldText14'}>{t.endDate}</Typography>
            </TableHeadCell>
            <TableHeadCell>
              <Typography variant={'boldText14'}>{t.price}</Typography>
            </TableHeadCell>
            <TableHeadCell>
              <Typography variant={'boldText14'}>{t.subscriptionType}</Typography>
            </TableHeadCell>
            <TableHeadCell>
              <Typography variant={'boldText14'}>{t.paymentType}</Typography>
            </TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {payments?.map(p => (
            <TableRow key={p.id}>
              <TableCell>
                <Typography variant={'regularText14'}>
                  {new Date(p.dateOfPayment).toLocaleDateString('ru-Ru')}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant={'regularText14'}>
                  {new Date(p.endDate).toLocaleDateString('ru-Ru')}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant={'regularText14'}>{p.price}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant={'regularText14'}>{p.type}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant={'regularText14'}>{p.paymentType}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
