import { useEffect, useRef, useState } from 'react'

import { BanUserModal } from '@/features/user-modals'
import { GetAllPostsQuery } from '@/queries/posts/posts.generated'
import { BanIcon } from '@/shared/assets'
import { PostDescription } from '@/shared/ui/PostDescription'
import { Avatar, Typography } from '@funnyteam/ui-kit'
import clsx from 'clsx'
import { formatDistanceToNowStrict, parseISO } from 'date-fns'
import { enUS, ru } from 'date-fns/locale'
import Image from 'next/image'
import { useRouter } from 'next/router'

import s from './Post.module.scss'

import { SliderPost } from '../SliderPost'

const DESCRIPTION_SIZES = {
  length: 60,
  maxHeight: 240,
  minHeight: 72,
}

export type PostType = GetAllPostsQuery['getPosts']['items'][number]
type PropsType = {
  post: PostType
  refetch: () => void
}
export const PostItem = ({ post, refetch }: PropsType) => {
  const { locale } = useRouter()
  const [isExpanded, setIsExpanded] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(DESCRIPTION_SIZES.minHeight)
  const [timeAgo, setTimeAgo] = useState<null | string>(null)
  const [isOpenModalBan, setIsOpenModalBan] = useState<boolean>(false)

  useEffect(() => {
    setTimeAgo(
      formatDistanceToNowStrict(parseISO(post.createdAt as string), {
        addSuffix: true,
        locale: locale === 'ru' ? ru : enUS,
      })
    )
  }, [locale, post.createdAt])

  const handleToggle = () => {
    setIsExpanded(prev => !prev)
  }

  useEffect(() => {
    if (isExpanded && contentRef.current) {
      setHeight(contentRef.current?.scrollHeight)
    } else {
      setHeight(DESCRIPTION_SIZES.minHeight)
    }
  }, [height, isExpanded])

  const top = DESCRIPTION_SIZES.maxHeight - (height - DESCRIPTION_SIZES.minHeight)
  const topStyle = !isExpanded ? `${DESCRIPTION_SIZES.maxHeight}px` : `${top}px`
  const postOwnerAvatar =
    (post &&
      post.postOwner.avatars &&
      post.postOwner.avatars.length !== 0 &&
      post.postOwner.avatars[0].url) ||
    ''

  return (
    <div className={s.post}>
      <div className={s.slider}>
        {post && post.images && (
          <SliderPost
            isDots={post.images.length > 1}
            sizeBtn={24}
            sliderLength={post.images.length}
          >
            {post.images.map(i => (
              <Image
                alt={'post image'}
                height={240}
                key={i.url}
                priority
                src={i.url as string}
                width={234}
              />
            ))}
          </SliderPost>
        )}
      </div>
      <div className={clsx(s.postInfo, { [s.expanded]: isExpanded })} style={{ top: topStyle }}>
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            gap: '15px',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ alignItems: 'center', display: 'flex', gap: '13px' }}>
            <Avatar size={36} src={postOwnerAvatar} userName={post.postOwner.userName} />
            <Typography as={'h3'} className={s.userName} variant={'h3'}>
              {post.postOwner.userName}
            </Typography>
          </div>
          <div onClick={() => setIsOpenModalBan(true)} style={{ cursor: 'pointer' }}>
            <BanIcon />
          </div>
        </div>
        <Typography as={'p'} className={s.date}>
          {timeAgo}
        </Typography>
        <div ref={contentRef}>
          <PostDescription
            descriptionMaxLength={DESCRIPTION_SIZES.length}
            isFullText={isExpanded}
            toggleText={handleToggle}
          >
            {post.description}
          </PostDescription>
        </div>
      </div>

      <BanUserModal
        isOpenBanModal={isOpenModalBan}
        refetch={refetch}
        setIsOpenBanModal={setIsOpenModalBan}
        setShowBanIcon={() => {}}
        userId={post.postOwner.id}
        userName={post.postOwner.userName}
      />
    </div>
  )
}
