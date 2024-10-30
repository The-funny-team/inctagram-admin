import { getNavbarLayout } from '@/shared/layouts/NavBarLayout/NavBarLayout'
import { HeadMeta } from '@/shared/ui/HeadMeta'

const PaymentsListPage = () => (
  <>
    <HeadMeta title={'Users list'} />

    <main>Payments list</main>
  </>
)

PaymentsListPage.getLayout = getNavbarLayout
export default PaymentsListPage
