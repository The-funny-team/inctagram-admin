import { useState } from 'react'

import { Checkbox, Input } from '@funnyteam/ui-kit'

import s from './PaymentsList.module.scss'

export const PaymentsList = () => {
  const [searchTerm, setSearch] = useState<string>('')

  const handleSearch = (value: string) => {
    setSearch(prevState => value)
  }

  return (
    <div className={s.paymentsWrapper}>
      <div className={s.checkBox}>
        <Checkbox checked label={'Autoupdate'} />
      </div>
      <div className={s.searchInput}>
        <Input onValueChange={handleSearch} type={'search'} value={searchTerm} />
      </div>
    </div>
  )
}
