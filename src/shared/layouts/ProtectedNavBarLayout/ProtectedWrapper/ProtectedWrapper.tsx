import { PropsWithChildren } from 'react'

import { ROUTES_URL } from '@/shared/const'
import { loadFromLocalStorage } from '@/shared/lib/helpers'
import { Loader } from '@/shared/ui/Loader'
import { useRouter } from 'next/router'

export const ProtectionWrapper = ({ children }: PropsWithChildren<{}>) => {
  const isAuth = loadFromLocalStorage('isAuth', '')
  const router = useRouter()

  if (!isAuth) {
    void router.push(ROUTES_URL.SIGN_IN)

    return null
  }

  return <>{children}</>
}
