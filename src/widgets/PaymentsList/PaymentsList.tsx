import { useState } from 'react'

import { useGetAllPaymentsQuery } from '@/queries/payments/payments.generated'
import { PAGINATION_OPTIONS } from '@/shared/const'
import { useDebounce } from '@/shared/lib/hooks'
import { Loader } from '@/shared/ui/Loader'
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
  const debounceValue = useDebounce(searchTerm, 500)

  const { data, loading } = useGetAllPaymentsQuery({
    variables: {
      pageNumber,
      pageSize,
      searchTerm: debounceValue || '',
      sortBy,
      sortDirection,
    },
  })

  const payments = data?.getPayments.items
  const paymentsCount = data?.getPayments.totalCount

  const handleSearch = (value: string) => {
    setPageNumber(1)
    setSearch(prevState => value)
  }

  const handlePageSize = (pageSize: string) => {
    setPageSize(Number(pageSize))
    setPageNumber(1)
  }

  const handleDirectionChange = (sortParams: {
    newDirection: SortDirection
    newSortBy: SortPaymentsType
  }) => {
    setPageNumber(1)
    setSortBy(sortParams.newSortBy)
    setSortDirection(sortParams.newDirection)
  }

  return (
    <div className={s.paymentsWrapper}>
      <div className={s.checkBox}>
        <Checkbox checked label={'Autoupdate'} />
      </div>
      <div className={s.searchInput}>
        <Input
          onValueChange={handleSearch}
          placeholder={'Search'}
          type={'search'}
          value={searchTerm}
        />
      </div>
      {loading && <Loader />}
      {payments && (
        <PaymentsListTable
          direction={sortDirection}
          onDirectionChange={handleDirectionChange}
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
