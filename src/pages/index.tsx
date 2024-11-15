import { useEffect } from 'react'

import { ROUTES_URL } from '@/shared/const'
import { getRootLayout } from '@/shared/layouts'
import { loadFromLocalStorage } from '@/shared/lib/helpers'
import { useRouter } from 'next/router'

import '@funnyteam/ui-kit/style.css'

const Page = () => {
  const isAuth = loadFromLocalStorage('isAuth', false)
  const router = useRouter()

  useEffect(() => {
    if (!isAuth) {
      void router.push(ROUTES_URL.SIGN_IN)
    } else {
      void router.push(ROUTES_URL.USERS_LIST)
    }
  }, [isAuth, router])

  return null
}

Page.getLayout = getRootLayout
export default Page
