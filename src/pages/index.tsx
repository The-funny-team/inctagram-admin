import { HeadMeta } from '@/shared/ui/HeadMeta'
import { Test } from '@/widgets/test/Test'

import '@funnyteam/ui-kit/style.css'
export default function Home() {
  return (
    <>
      <HeadMeta title={'Home page'} />

      <main>
        Welcome! This is new app!
        <Test />
      </main>
    </>
  )
}
