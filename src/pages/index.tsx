import { useEffect } from 'react'

import { ROUTES_URL } from '@/shared/const'
import { getRootLayout } from '@/shared/layouts'
import { useRouter } from 'next/router'

import '@funnyteam/ui-kit/style.css'

const Page = () => {
  const auth = false // temporary variable
  const router = useRouter()

  useEffect(() => {
    if (!auth) {
      void router.push(ROUTES_URL.SIGN_IN)
    } else {
      void router.push(ROUTES_URL.USERS_LIST)
    }
  }, [auth, router])

  return null
}

Page.getLayout = getRootLayout
export default Page
