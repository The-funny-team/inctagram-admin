import { useState } from 'react'

import { useGetPaymentsQuery } from '@/queries/user/user.generated'
import { PAGINATION_OPTIONS } from '@/shared/const'
import { useTranslation } from '@/shared/lib/hooks'
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
  const { text } = useTranslation()
  const t = text.pages.user.tabs.payments.tableHead

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
