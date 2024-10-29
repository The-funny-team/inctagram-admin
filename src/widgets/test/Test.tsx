import { useState } from 'react'

import { Button, Input, Select } from '@funnyteam/ui-kit'
import { Inter } from 'next/font/google'

import s from './Test.module.scss'

const inter = Inter({ subsets: ['latin'] })

const usersSelect = [
  { label: 'Blocked', value: 'blocked' },
  { label: 'Not Blocked', value: 'not' },
]

export const Test = () => {
  const [usersValue, setUsersValue] = useState<string>('')
  const onChangeHandler = (value: string) => {
    setUsersValue(prev => value)
  }

  return (
    <div className={s.wrapper}>
      TEST
      <Button variant={'tertiary'}>TEST</Button>
      <Button variant={'secondary'}>TEST</Button>
      <Button variant={'link'}>TEST</Button>
      <div style={{ padding: '25px' }}>
        <Input type={'search'} />
      </div>
      <div style={{ margin: '0 auto', width: '200px' }}>
        <Select
          className={inter.className}
          onValueChange={onChangeHandler}
          options={usersSelect}
          placeholder={'Not Selected'}
          value={usersValue}
        />
      </div>
    </div>
  )
}
