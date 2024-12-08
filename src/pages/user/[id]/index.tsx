import { ProtectedWrapper, getRootLayout } from '@/shared/layouts'
import { HeadMeta } from '@/shared/ui/HeadMeta'
import { User } from '@/widgets/User'

const UserPage = () => (
  <>
    <ProtectedWrapper>
      <HeadMeta title={'Posts list'} />
      <main>
        <User />
      </main>
    </ProtectedWrapper>
  </>
)

UserPage.getLayout = getRootLayout
export default UserPage
