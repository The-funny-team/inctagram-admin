import { useState } from 'react'

import {
  FilledPaymentIcon,
  FilledPostsIcon,
  FilledStatisticIcon,
  FilledUserIcon,
  PaymentIcon,
  PostsIcon,
  StatisticIcon,
  UserIcon,
} from '@/shared/assets'
import { useTranslation } from '@/shared/lib/hooks'
import { Button } from '@funnyteam/ui-kit'
import clsx from 'clsx'
import Link from 'next/link'

import s from './NavBar.module.scss'

type Props = {
  className?: string
}

export const NavBar = ({ className }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const {
    router,
    text: {
      layout: { navBar: t },
    },
  } = useTranslation()

  const pathname = '/'.concat(router.pathname.split('/')[1])

  const shouldActive = (value: boolean) => {
    return !isOpen && value
  }

  return (
    <aside className={clsx(s.root, className)}>
      <nav className={s.nav}>
        <Button
          as={Link}
          className={clsx(s.button, shouldActive(pathname === '/users-list') && s.active)}
          href={'/users-list'}
        >
          {pathname === '/users-list' ? <FilledUserIcon /> : <UserIcon />}
          {t.usersList}
        </Button>
        <Button
          as={Link}
          className={clsx(s.button, shouldActive(pathname === '/statistics') && s.active)}
          href={'/statistics'}
        >
          {shouldActive(pathname === '/statistics') ? <FilledStatisticIcon /> : <StatisticIcon />}
          {t.statistics}
        </Button>

        <Button
          as={Link}
          className={clsx(s.button, shouldActive(pathname === '/payments') && s.active)}
          href={'/payments'}
        >
          {shouldActive(pathname === '/payments') ? <FilledPaymentIcon /> : <PaymentIcon />}
          {t.paymentsList}
        </Button>
        <Button
          as={Link}
          className={clsx(s.button, shouldActive(pathname === '/posts') && s.active)}
          href={'/posts'}
        >
          {shouldActive(pathname === '/posts') ? <FilledPostsIcon /> : <PostsIcon />}
          {t.postsList}
        </Button>
      </nav>
    </aside>
  )
}
