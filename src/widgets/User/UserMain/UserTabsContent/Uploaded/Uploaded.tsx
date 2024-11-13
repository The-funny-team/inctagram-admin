import { useGetUploadedPhotosQuery } from '@/queries/user/user.generated'
import clsx from 'clsx'
import Image from 'next/image'

import s from './Uploaded.module.scss'

type Props = {
  userId: number
}
export const Uploaded = ({ userId }: Props) => {
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
      {photos?.map(p => (
        <div className={s.imageItem} key={p.id}>
          <Image alt={'post'} fill src={p.url ?? ''} />
        </div>
      ))}
    </div>
  )
}

type SkeletonProps = {
  className?: string
  height?: string
  width?: string
}
const Skeleton = ({ className, height = '100%', width = '100%' }: SkeletonProps) => (
  <div className={clsx(s.skeleton, className)} style={{ height, width }} />
)
