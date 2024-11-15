import { getProtectedNavbarLayout } from '@/shared/layouts/'
import { HeadMeta } from '@/shared/ui/HeadMeta'

const StatisticListPage = () => (
  <>
    <HeadMeta title={'Statistic'} />
    <main>Statistic</main>
  </>
)

StatisticListPage.getLayout = getProtectedNavbarLayout
export default StatisticListPage
