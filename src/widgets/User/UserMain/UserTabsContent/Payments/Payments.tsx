import { useState } from 'react'

import { useGetPaymentsQuery } from '@/queries/user/user.generated'
import { PAGINATION_OPTIONS } from '@/shared/const'
import { useTranslation } from '@/shared/lib/hooks'
import { Loader } from '@/shared/ui/Loader'
import { SubscriptionByPaymentModel } from '@/types'
import { Pagination } from '@funnyteam/ui-kit'

import s from './Payments.module.scss'

import { PaymentsListTable } from './PaymentsListTable'

type Props = {
  userId: number
}

export const Payments = ({ userId }: Props) => {
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(8)
  const { text } = useTranslation()
  const t = text.pages.user.tabs.payments

  const { data, loading } = useGetPaymentsQuery({
    variables: {
      page: pageNumber,
      pageSize,
      userId,
    },
  })

  const paymentsList = data?.getPaymentsByUser.items as Omit<
    SubscriptionByPaymentModel,
    'businessAccountId' | 'payments' | 'status'
  >[]
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
      {paymentsList?.length ? (
        <div>
          <PaymentsListTable payments={paymentsList} />
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
      ) : (
        <div>{t.emptyTab}</div>
      )}
    </div>
  )
}
