import { getRootLayout } from '@/shared/layouts'
import { HeadMeta } from '@/shared/ui/HeadMeta'

const SignInPage = () => (
  <>
    <HeadMeta title={'Sign In'} />
    <main>Sign In</main>
  </>
)

SignInPage.getLayout = getRootLayout
export default SignInPage
