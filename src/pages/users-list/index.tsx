import { getNavbarLayout } from '@/shared/layouts/NavBarLayout/NavBarLayout'
import { HeadMeta } from '@/shared/ui/HeadMeta'

const UsersListPage = () => (
  <>
    <HeadMeta title={'Users list'} />

    <main>Users list</main>
  </>
)

UsersListPage.getLayout = getNavbarLayout
export default UsersListPage
