import { useEffect, useState } from 'react'

import { useGetAllPostsQuery, usePostAddedSubscription } from '@/queries/posts/posts.generated'
import { useDebounce } from '@/shared/lib/hooks'
import { PostItem, PostType } from '@/widgets/Posts/Post/Post'
import { Input } from '@funnyteam/ui-kit'

import s from './Posts.module.scss'

export const Posts = () => {
  const [allPosts, setAllPosts] = useState<PostType[]>([])
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [endCursorPostId, setEndCursorPostId] = useState(0)

  const debouncedValue = useDebounce(searchTerm, 500)
  const { data: posts, refetch } = useGetAllPostsQuery({
    variables: { endCursorPostId, searchTerm: debouncedValue },
  })
  const { data: newPostAdded } = usePostAddedSubscription()

  const handleSearch = (value: string) => {
    setSearchTerm(prevState => value)
  }

  useEffect(() => {
    if (posts && posts?.getPosts.items.length) {
      setAllPosts(prevState => [...prevState, ...posts.getPosts.items])
    }
  }, [posts])

  useEffect(() => {
    if (newPostAdded && newPostAdded.postAdded) {
      setAllPosts(prevState => [newPostAdded.postAdded, ...prevState])
    }
  }, [newPostAdded])

  return (
    <div className={s.wrapper}>
      <Input onValueChange={handleSearch} type={'search'} value={searchTerm} />
      <div className={s.posts}>
        {allPosts?.map(p => <PostItem key={p.createdAt} post={p} refetch={refetch} />)}
      </div>
    </div>
  )
}
