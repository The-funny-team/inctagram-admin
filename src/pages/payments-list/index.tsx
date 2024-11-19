import { getProtectedNavbarLayout } from '@/shared/layouts'
import { HeadMeta } from '@/shared/ui/HeadMeta'
import { PaymentsList } from '@/widgets/PaymentsList'

const PaymentsListPage = () => (
  <>
    <HeadMeta title={'Payments list'} />
    <main>
      <PaymentsList />
    </main>
  </>
)

PaymentsListPage.getLayout = getProtectedNavbarLayout
export default PaymentsListPage
