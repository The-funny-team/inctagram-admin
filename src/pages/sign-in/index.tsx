import { getRootLayout } from '@/shared/layouts'
import { HeadMeta } from '@/shared/ui/HeadMeta'
import { SignIn } from '@/widgets/SignIn/ui/SignIn'

const SignInPage = () => (
  <>
    <HeadMeta title={'Sign In'} />
    <main>
      <SignIn />
    </main>
  </>
)

SignInPage.getLayout = getRootLayout
export default SignInPage
