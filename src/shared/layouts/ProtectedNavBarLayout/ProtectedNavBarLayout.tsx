import React, { PropsWithChildren, ReactElement } from 'react'

import { NavBarLayout, RootLayout } from '@/shared/layouts'
import { NextPage } from 'next'

import { ProtectedWrapper } from './ProtectedWrapper'

export const ProtectedNavbarLayout: NextPage<PropsWithChildren<{}>> = ({ children }) => {
  return <ProtectedWrapper>{children}</ProtectedWrapper>
}
export const getProtectedNavbarLayout = (page: ReactElement) => {
  return (
    <RootLayout>
      <ProtectedNavbarLayout>
        <NavBarLayout>{page}</NavBarLayout>
      </ProtectedNavbarLayout>
    </RootLayout>
  )
}
