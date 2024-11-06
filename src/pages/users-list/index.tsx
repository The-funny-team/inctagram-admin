import { getNavbarLayout } from '@/shared/layouts/NavBarLayout/NavBarLayout'
import { HeadMeta } from '@/shared/ui/HeadMeta'
import { UsersList } from '@/widgets'

const UsersListPage = () => (
  <>
    <HeadMeta title={'Users list'} />
    {/*<main>Users list</main>*/}
    <UsersList />
  </>
)

UsersListPage.getLayout = getNavbarLayout
export default UsersListPage
