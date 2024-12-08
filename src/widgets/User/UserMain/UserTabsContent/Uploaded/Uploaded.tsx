import { useEffect, useState } from 'react'

import { useGetUploadedPhotosQuery } from '@/queries/user/user.generated'
import { useTranslation } from '@/shared/lib/hooks'
import { ImagePost } from '@/types'
import { Typography } from '@funnyteam/ui-kit'
import Image from 'next/image'

import s from './Uploaded.module.scss'

type Props = {
  userId: number
}
export const Uploaded = ({ userId }: Props) => {
  const { text } = useTranslation()
  const t = text.pages.user.tabs.uploadPhotos
  const [allPhotos, setAllPhotos] = useState<ImagePost[]>([])
  const [endCursorId, setEndCursorId] = useState(0)

  const { data: photos, loading } = useGetUploadedPhotosQuery({
    skip: !userId,
    variables: {
      endCursorId: endCursorId,
      userId,
    },
  })

  useEffect(() => {
    if (photos && photos.getPostsByUser.items?.length) {
      setAllPhotos([...allPhotos, ...photos.getPostsByUser.items])
    }
  }, [photos])

  useEffect(() => {
    if (loading) {
      return
    }
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop
      const windowHeight = window.innerHeight
      const fullHeight = document.documentElement.scrollHeight

      if (windowHeight + scrollTop >= fullHeight - 100) {
        const lastId = allPhotos[allPhotos?.length - 1].id || 0

        setEndCursorId(lastId)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [allPhotos])

  const skeletonArray = Array.from({ length: 8 }, (_, index) => index)

  return (
    <div className={s.images}>
      {loading &&
        skeletonArray.map((_, index) => <Skeleton height={'235px'} key={index} width={'230px'} />)}
      {allPhotos?.length ? (
        allPhotos?.map(p => (
          <div className={s.imageItem} key={p.id}>
            <Image alt={'post'} fill src={p.url ?? ''} />
          </div>
        ))
      ) : (
        <div className={s.noPhotos}>
          <Typography variant={'large'}>{t.emptyTab}</Typography>
        </div>
      )}
    </div>
  )
}

type SkeletonProps = {
  height?: string
  width?: string
}
const Skeleton = ({ height = '100%', width = '100%' }: SkeletonProps) => (
  <div className={s.skeleton} style={{ height, width }} />
)
