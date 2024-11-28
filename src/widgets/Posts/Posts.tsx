import { useEffect, useState } from 'react'

import { useGetAllPostsQuery, usePostAddedSubscription } from '@/queries/posts/posts.generated'
import { useDebounce, useTranslation } from '@/shared/lib/hooks'
import { PostItem, PostType } from '@/widgets/Posts/Post/Post'
import { Input, Typography } from '@funnyteam/ui-kit'

import s from './Posts.module.scss'

export const Posts = () => {
  const { text } = useTranslation()
  const t = text.pages.posts
  const [allPosts, setAllPosts] = useState<PostType[]>([])
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [endCursorPostId, setEndCursorPostId] = useState(0)

  const debouncedValue = useDebounce(searchTerm, 500)

  const {
    data: posts,

    refetch,
  } = useGetAllPostsQuery({
    variables: { endCursorPostId, searchTerm: debouncedValue },
  })
  const { data: newPostAdded } = usePostAddedSubscription()

  const handleSearch = (value: string) => {
    setAllPosts([])
    setEndCursorPostId(0)
    setSearchTerm(prevState => value)
  }

  useEffect(() => {
    if (posts && posts?.getPosts.items.length) {
      setAllPosts([...allPosts, ...posts.getPosts.items])
    }
  }, [posts, allPosts])

  useEffect(() => {
    if (newPostAdded && newPostAdded.postAdded) {
      setAllPosts(prevState => [newPostAdded.postAdded, ...prevState])
    }
  }, [newPostAdded])

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop
      const windowHeight = window.innerHeight
      const fullHeight = document.documentElement.scrollHeight

      if (windowHeight + scrollTop >= fullHeight - 100) {
        const lastId = allPosts[allPosts?.length - 1].id

        setEndCursorPostId(lastId)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [allPosts])

  return (
    <div className={s.wrapper}>
      <Input onValueChange={handleSearch} type={'search'} value={searchTerm} />
      <div className={s.posts}>
        {allPosts.length !== 0 ? (
          allPosts.map(p => <PostItem key={p.id} post={p} refetch={refetch} />)
        ) : (
          <Typography variant={'regularText16'}>{t.noResults}</Typography>
        )}
      </div>
    </div>
  )
}
