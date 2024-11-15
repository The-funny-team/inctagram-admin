import { getProtectedNavbarLayout } from '@/shared/layouts/ProtectedNavBarLayout'
import { HeadMeta } from '@/shared/ui/HeadMeta'

const PostsListPage = () => (
  <>
    <HeadMeta title={'Posts list'} />
    <main>Posts list</main>
  </>
)

PostsListPage.getLayout = getProtectedNavbarLayout
export default PostsListPage
