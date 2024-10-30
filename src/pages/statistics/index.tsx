import { getNavbarLayout } from '@/shared/layouts/NavBarLayout/NavBarLayout'
import { HeadMeta } from '@/shared/ui/HeadMeta'

const StatisticListPage = () => (
  <>
    <HeadMeta title={'Statistic'} />
    <main>Statistic</main>
  </>
)

StatisticListPage.getLayout = getNavbarLayout
export default StatisticListPage
