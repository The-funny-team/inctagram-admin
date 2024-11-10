import { useState } from 'react'

import { useTranslation } from '@/shared/lib/hooks'
import { Tabs } from '@funnyteam/ui-kit'

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
      <div>
        {curTab === TabContentType.UPLOADED && <div>Uploaded Photos</div>}
        {curTab === TabContentType.PAYMENTS && <div>Payments</div>}
        {curTab === TabContentType.FOLLOWERS && <div>Followers</div>}
        {curTab === TabContentType.FOLLOWING && <div>Following</div>}
      </div>
    </div>
  )
}
