import { getNavbarLayout } from '@/shared/layouts/NavBarLayout/NavBarLayout'
import { HeadMeta } from '@/shared/ui/HeadMeta'

const PostsListPage = () => (
  <>
    <HeadMeta title={'Posts list'} />
    <main>Posts list</main>
  </>
)

PostsListPage.getLayout = getNavbarLayout
export default PostsListPage
