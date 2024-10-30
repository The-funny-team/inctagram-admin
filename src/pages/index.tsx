import { useEffect } from 'react'

import { getRootLayout } from '@/shared/layouts'
import { HeadMeta } from '@/shared/ui/HeadMeta'
import { useRouter } from 'next/router'

import '@funnyteam/ui-kit/style.css'

const Page = () => {
  const auth = true // temporary variable
  const router = useRouter()

  useEffect(() => {
    if (!auth) {
      void router.push('/sign-in')
    } else {
      void router.push('/users-list')
    }
  }, [auth, router])

  return null
}

Page.getLayout = getRootLayout
export default Page
