import { useGetUploadedPhotosQuery } from '@/queries/user/user.generated'
import { useTranslation } from '@/shared/lib/hooks'
import { Typography } from '@funnyteam/ui-kit'
import Image from 'next/image'

import s from './Uploaded.module.scss'

type Props = {
  userId: number
}
export const Uploaded = ({ userId }: Props) => {
  const { text } = useTranslation()
  const t = text.pages.user.tabs.uploadPhotos
  const { data, loading } = useGetUploadedPhotosQuery({
    skip: !userId,
    variables: {
      userId,
    },
  })

  const photos = data?.getPostsByUser.items
  const skeletonArray = Array.from({ length: 8 }, (_, index) => index)

  return (
    <div className={s.images}>
      {loading &&
        skeletonArray.map((_, index) => <Skeleton height={'235px'} key={index} width={'230px'} />)}
      {photos?.length ? (
        photos?.map(p => (
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
