import { useState } from 'react'

import { useGetAllPaymentsQuery } from '@/queries/payments/payments.generated'
import { PAGINATION_OPTIONS } from '@/shared/const'
import { SortDirection } from '@/types'
import { Checkbox, Input, Pagination } from '@funnyteam/ui-kit'

import s from './PaymentsList.module.scss'

import { PaymentsListTable } from './PaymentsListTable'

export type SortPaymentsType = 'amount' | 'createdAt' | 'paymentMethod' | 'userName'

export const PaymentsList = () => {
  const [sortBy, setSortBy] = useState<SortPaymentsType>('createdAt')
  const [searchTerm, setSearch] = useState<string>('')
  const [sortDirection, setSortDirection] = useState<SortDirection>(SortDirection.Desc)
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(8)

  const { data, loading, error } = useGetAllPaymentsQuery({
    variables: {
      pageNumber,
      pageSize,
      searchTerm,
      sortBy,
      sortDirection,
    },
  })

  const payments = data?.getPayments.items
  const paymentsCount = data?.getPayments.totalCount

  const handleSearch = (value: string) => {
    setPageSize(1)
    setSearch(prevState => value)
  }

  const handlePageSize = (pageSize: string) => {
    setPageSize(Number(pageSize))
    setPageNumber(1)
  }

  return (
    <div className={s.paymentsWrapper}>
      <div className={s.checkBox}>
        <Checkbox checked label={'Autoupdate'} />
      </div>
      <div className={s.searchInput}>
        <Input onValueChange={handleSearch} type={'search'} value={searchTerm} />
      </div>
      {payments && (
        <PaymentsListTable
          direction={SortDirection.Asc}
          onDirectionChange={() => {}}
          payments={payments}
          sortBy={sortBy}
        />
      )}
      <div className={s.pagination}>
        <Pagination
          currentPage={pageNumber}
          onChangePage={setPageNumber}
          onValueChange={handlePageSize}
          options={PAGINATION_OPTIONS}
          pageSize={pageSize}
          totalCount={paymentsCount}
        />
      </div>
    </div>
  )
}
