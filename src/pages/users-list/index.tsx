import { getNavbarLayout } from '@/shared/layouts/NavBarLayout/NavBarLayout'
import { HeadMeta } from '@/shared/ui/HeadMeta'
import { UsersList } from '@/widgets/UsersList'

const UsersListPage = () => (
  <>
    <HeadMeta title={'Users list'} />
    <UsersList />
  </>
)

UsersListPage.getLayout = getNavbarLayout
export default UsersListPage
