import { SortActiveIcon, SortDefaultIcon } from '@/shared/assets'
import { SortDirection } from '@/types'
import { Table, TableBody, TableHead, TableHeadCell, TableRow, Typography } from '@funnyteam/ui-kit'

import s from './PaymentsListTable.module.scss'
import { PaymentsListRow } from '@/widgets/PaymentsList/PaymentsListTable/PaymentsListRow'

export type SortPaymentsType = 'amount' | 'createdAt' | 'paymentMethod' | 'userName'

type PropsType = {
  direction: SortDirection
  onDirectionChange: (sortParams: {
    newDirection: SortDirection
    newSortBy: SortPaymentsType
  }) => void
  sortBy: SortPaymentsType
}
export const PaymentsListTable = ({ direction, onDirectionChange, sortBy }: PropsType) => {
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
                  Username
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
                  Date added
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
                  Amount, $
                </Typography>
                {direction === SortDirection.Asc && sortBy === 'createdAt' ? (
                  <SortActiveIcon />
                ) : (
                  <SortDefaultIcon />
                )}
              </div>
            </TableHeadCell>
            <TableHeadCell>
              <Typography variant={'boldText14'}>Subscription</Typography>
            </TableHeadCell>
            <TableHeadCell>
              <div className={s.sortCell} onClick={() => toggleSort('paymentMethod')}>
                <Typography as={'span'} variant={'boldText14'}>
                  Payment Method
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
          <PaymentsListRow></PaymentsListRow>
        </TableBody>
      </Table>
    </div>
  )
}
