import { useState } from 'react'

import { useGetPaymentsQuery } from '@/queries/user/user.generated'
import { PAGINATION_OPTIONS } from '@/shared/const'
import { Loader } from '@/shared/ui/Loader'
import {
  Pagination,
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
  userId: number
}

export const Payments = ({ userId }: Props) => {
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(8)

  const { data, loading } = useGetPaymentsQuery({
    variables: {
      page: pageNumber,
      pageSize,
      userId,
    },
  })

  const payments = data?.getPaymentsByUser.items
  const countOfPayments = data?.getPaymentsByUser.totalCount

  const handlePageSize = (pageSize: string) => {
    setPageSize(Number(pageSize))
    setPageNumber(1)
  }

  if (loading) {
    return <Loader />
  }

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>
              <Typography variant={'boldText14'}>Date of Payment</Typography>
            </TableHeadCell>
            <TableHeadCell>
              <div className={s.sortCell}>
                <Typography variant={'boldText14'}>End date of subscription</Typography>
              </div>
            </TableHeadCell>
            <TableHeadCell>
              <Typography variant={'boldText14'}>Amount, $</Typography>
            </TableHeadCell>
            <TableHeadCell>
              <div className={s.sortCell}>
                <Typography as={'span'} variant={'boldText14'}>
                  Subscription Type
                </Typography>
              </div>
            </TableHeadCell>
            <TableHeadCell>Payment Type</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {payments?.map(p => (
            <TableRow key={p.id}>
              <TableCell>
                <div className={s.idCell}>
                  <Typography variant={'regularText14'}>
                    {new Date(p.dateOfPayment).toLocaleDateString('ru-Ru')}
                  </Typography>
                </div>
              </TableCell>
              <TableCell>
                <Typography as={'span'} variant={'regularText14'}>
                  {new Date(p.endDate).toLocaleDateString('ru-Ru')}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography className={s.linkCell} variant={'regularText14'}>
                  {p.price}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography as={'span'} variant={'regularText14'}>
                  {p.type}
                </Typography>
              </TableCell>
              <TableCell>{p.paymentType}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={s.pagination}>
        <Pagination
          currentPage={pageNumber}
          onChangePage={setPageNumber}
          onValueChange={handlePageSize}
          options={PAGINATION_OPTIONS}
          pageSize={pageSize}
          totalCount={countOfPayments}
        />
      </div>
    </div>
  )
}
