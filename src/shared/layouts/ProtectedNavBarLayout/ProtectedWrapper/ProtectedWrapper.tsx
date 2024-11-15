import { PropsWithChildren, useEffect } from 'react'

import { ROUTES_URL } from '@/shared/const'
import { loadFromLocalStorage } from '@/shared/lib/helpers'
import { useRouter } from 'next/router'

export const ProtectedWrapper = ({ children }: PropsWithChildren<{}>) => {
  const isAuth = loadFromLocalStorage('isAuth', false)
  const router = useRouter()

  useEffect(() => {
    if (!isAuth) {
      void router.push(ROUTES_URL.SIGN_IN)
    }
  }, [isAuth, router])

  if (!isAuth) {
    return null
  }

  return <>{children}</>
}
