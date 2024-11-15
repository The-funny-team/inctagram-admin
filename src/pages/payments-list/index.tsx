import { getProtectedNavbarLayout } from '@/shared/layouts/ProtectedNavBarLayout'
import { HeadMeta } from '@/shared/ui/HeadMeta'

const PaymentsListPage = () => (
  <>
    <HeadMeta title={'Payments list'} />
    <main>Payments list</main>
  </>
)

PaymentsListPage.getLayout = getProtectedNavbarLayout
export default PaymentsListPage
