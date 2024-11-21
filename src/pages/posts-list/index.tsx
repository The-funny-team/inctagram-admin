import { getProtectedNavbarLayout } from '@/shared/layouts'
import { HeadMeta } from '@/shared/ui/HeadMeta'
import { Posts } from '@/widgets/Posts'

const PostsListPage = () => (
  <>
    <HeadMeta title={'Posts list'} />
    <main>
      <Posts />
    </main>
  </>
)

PostsListPage.getLayout = getProtectedNavbarLayout
export default PostsListPage
