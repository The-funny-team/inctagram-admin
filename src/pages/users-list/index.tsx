import { getProtectedNavbarLayout } from '@/shared/layouts/ProtectedNavBarLayout'
import { HeadMeta } from '@/shared/ui/HeadMeta'
import { UsersList } from '@/widgets/UsersList'

const UsersListPage = () => (
  <>
    <HeadMeta title={'Users list'} />
    <UsersList />
  </>
)

UsersListPage.getLayout = getProtectedNavbarLayout
export default UsersListPage
