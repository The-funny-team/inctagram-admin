import { useState } from 'react'

import { useDebounce } from '@/shared/lib/hooks'
import { Input } from '@funnyteam/ui-kit'

import s from './Posts.module.scss'

export const Posts = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')

  const debouncedValue = useDebounce(searchTerm, 500)
  const handleSearch = (value: string) => {
    setSearchTerm(prevState => value)
  }

  return (
    <div className={s.wrapper}>
      <Input onValueChange={setSearchTerm} type={'search'} value={searchTerm} />
      <div className={s.posts}>Posts</div>
    </div>
  )
}
