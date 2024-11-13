import { useState } from 'react'

import { useTranslation } from '@/shared/lib/hooks'
import { Tabs } from '@funnyteam/ui-kit'

import { Followers, Following, Payments, Uploaded } from './UserTabsContent'

enum TabContentType {
  FOLLOWERS = 'FOLLOWERS',
  FOLLOWING = 'FOLLOWING',
  PAYMENTS = 'PAYMENTS',
  UPLOADED = 'UPLOADED',
}

export const UserMain = () => {
  const { router, text } = useTranslation()
  const t = text.pages.user.tabs
  const [curTab, setCurTab] = useState<string>(TabContentType.UPLOADED)
  const { id } = router.query

  const optionTabs = [
    { label: t.uploadPhotos, value: TabContentType.UPLOADED },
    { label: t.payments, value: TabContentType.PAYMENTS },
    { label: t.followers, value: TabContentType.FOLLOWERS },
    { label: t.following, value: TabContentType.FOLLOWING },
  ]
  const onChangeHandler = (value: string) => {
    setCurTab(prevState => value)
  }

  return (
    <div>
      <div>
        <Tabs onValueChange={onChangeHandler} options={optionTabs} value={curTab} />
      </div>
      <div style={{ paddingTop: '36px' }}>
        {curTab === TabContentType.UPLOADED && <Uploaded userId={Number(id)} />}
        {curTab === TabContentType.PAYMENTS && <Payments />}
        {curTab === TabContentType.FOLLOWERS && <Followers />}
        {curTab === TabContentType.FOLLOWING && <Following />}
      </div>
    </div>
  )
}
