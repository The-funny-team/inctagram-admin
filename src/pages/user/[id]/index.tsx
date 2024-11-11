import { getRootLayout } from '@/shared/layouts'
import { HeadMeta } from '@/shared/ui/HeadMeta'
import { User } from '@/widgets/User'

const UserPage = () => (
  <>
    <HeadMeta title={'Posts list'} />
    <main>
      <User />
    </main>
  </>
)

UserPage.getLayout = getRootLayout
export default UserPage
