import { useTranslation } from '@/shared/lib/hooks'
import { Typography } from '@funnyteam/ui-kit'
import clsx from 'clsx'

import s from './PostDescription.module.scss'

type PropsType = {
  children: string
  descriptionMaxLength: number
  isFullText: boolean
  toggleText: () => void
}
export const PostDescription = (props: PropsType) => {
  const { text } = useTranslation()
  const t = text.pages.posts.postDescription
  const { children, descriptionMaxLength, isFullText, toggleText } = props
  const descriptionText = children
  const isShowFullSize = descriptionText.length <= descriptionMaxLength
  const shortText = descriptionText.slice(0, descriptionMaxLength)

  return (
    <div className={s.descriptionContainer}>
      <Typography
        as={'p'}
        className={clsx(s.text, { [s.fullText]: isFullText })}
        variant={'regularText14'}
      >
        {isFullText ? `${descriptionText}` : `${shortText}`}
        {!isShowFullSize && (
          <span className={s.toggleButton} onClick={toggleText}>
            {isFullText ? `${t.shortText}` : `${t.fullText}`}
          </span>
        )}
      </Typography>
    </div>
  )
}
