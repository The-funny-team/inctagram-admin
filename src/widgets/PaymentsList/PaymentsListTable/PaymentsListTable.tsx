import { GetAllPaymentsQuery } from '@/queries/payments/payments.generated'
import { SortActiveIcon, SortDefaultIcon } from '@/shared/assets'
import { useTranslation } from '@/shared/lib/hooks'
import { SortDirection } from '@/types'
import { SortPaymentsType } from '@/widgets/PaymentsList/PaymentsList'
import { PaymentsListRow } from '@/widgets/PaymentsList/PaymentsListTable/PaymentsListRow'
import { Table, TableBody, TableHead, TableHeadCell, TableRow, Typography } from '@funnyteam/ui-kit'

import s from './PaymentsListTable.module.scss'

type PaymentsType = GetAllPaymentsQuery['getPayments']['items']

type PropsType = {
  direction: SortDirection
  onDirectionChange: (sortParams: {
    newDirection: SortDirection
    newSortBy: SortPaymentsType
  }) => void
  payments: PaymentsType
  sortBy: SortPaymentsType
}
export const PaymentsListTable = ({
  direction,
  onDirectionChange,
  payments,
  sortBy,
}: PropsType) => {
  const { text } = useTranslation()
  const t = text.pages.payments.tableHead
  const toggleSort = (newSortBy: SortPaymentsType) => {
    const newDirection = direction === SortDirection.Asc ? SortDirection.Desc : SortDirection.Asc

    onDirectionChange({ newDirection, newSortBy })
  }

  return (
    <div className={s.tableWrapper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>
              <div className={s.sortCell} onClick={() => toggleSort('userName')}>
                <Typography as={'span'} variant={'boldText14'}>
                  {t.userName}
                </Typography>
                {direction === SortDirection.Asc && sortBy === 'userName' ? (
                  <SortActiveIcon />
                ) : (
                  <SortDefaultIcon />
                )}
              </div>
            </TableHeadCell>
            <TableHeadCell>
              <div className={s.sortCell} onClick={() => toggleSort('createdAt')}>
                <Typography as={'span'} variant={'boldText14'}>
                  {t.dateAdded}
                </Typography>
                {direction === SortDirection.Asc && sortBy === 'userName' ? (
                  <SortActiveIcon />
                ) : (
                  <SortDefaultIcon />
                )}
              </div>
            </TableHeadCell>
            <TableHeadCell>
              <div className={s.sortCell} onClick={() => toggleSort('amount')}>
                <Typography as={'span'} variant={'boldText14'}>
                  {t.amount}
                </Typography>
                {direction === SortDirection.Asc && sortBy === 'createdAt' ? (
                  <SortActiveIcon />
                ) : (
                  <SortDefaultIcon />
                )}
              </div>
            </TableHeadCell>
            <TableHeadCell>
              <Typography variant={'boldText14'}>{t.subscription}</Typography>
            </TableHeadCell>
            <TableHeadCell>
              <div className={s.sortCell} onClick={() => toggleSort('paymentMethod')}>
                <Typography as={'span'} variant={'boldText14'}>
                  {t.paymentMethod}
                </Typography>
                {direction === SortDirection.Asc && sortBy === 'createdAt' ? (
                  <SortActiveIcon />
                ) : (
                  <SortDefaultIcon />
                )}
              </div>
            </TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {payments.map(p => (
            <PaymentsListRow key={p.id} payment={p} />
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
