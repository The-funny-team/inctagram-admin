import { useState } from 'react'

import { useGetAllPostsQuery } from '@/queries/posts/posts.generated'
import { useDebounce } from '@/shared/lib/hooks'
import { PostItem } from '@/widgets/Posts/Post/Post'
import { Input } from '@funnyteam/ui-kit'

import s from './Posts.module.scss'

export const Posts = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [endCursorPostId, setEndCursorPostId] = useState(0)

  const debouncedValue = useDebounce(searchTerm, 500)
  const { data: posts, refetch } = useGetAllPostsQuery({
    variables: { endCursorPostId, searchTerm: debouncedValue },
  })
  const handleSearch = (value: string) => {
    setSearchTerm(prevState => value)
  }

  const allPosts = posts?.getPosts.items

  return (
    <div className={s.wrapper}>
      <Input onValueChange={setSearchTerm} type={'search'} value={searchTerm} />
      <div className={s.posts}>
        {allPosts?.map(p => <PostItem key={p.id} post={p} refetch={refetch} />)}
      </div>
    </div>
  )
}
