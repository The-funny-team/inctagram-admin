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
import { ROUTES_URL } from '@/shared/const'
import { useTranslation } from '@/shared/lib/hooks'
import { Button } from '@funnyteam/ui-kit'
import clsx from 'clsx'
import Link from 'next/link'

import s from './NavBar.module.scss'

type Props = {
  className?: string
}

export const NavBar = ({ className }: Props) => {
  const {
    router,
    text: {
      layout: { navBar: t },
    },
  } = useTranslation()

  const pathname = '/'.concat(router.pathname.split('/')[1])

  return (
    <aside className={clsx(s.root, className)}>
      <nav className={s.nav}>
        <Button
          as={Link}
          className={clsx(s.button, pathname === ROUTES_URL.USERS_LIST && s.active)}
          href={ROUTES_URL.USERS_LIST}
        >
          {pathname === ROUTES_URL.USERS_LIST ? <FilledUserIcon /> : <UserIcon />}
          {t.usersList}
        </Button>
        <Button
          as={Link}
          className={clsx(s.button, pathname === ROUTES_URL.STATISTICS && s.active)}
          href={ROUTES_URL.STATISTICS}
        >
          {pathname === ROUTES_URL.STATISTICS ? <FilledStatisticIcon /> : <StatisticIcon />}
          {t.statistics}
        </Button>

        <Button
          as={Link}
          className={clsx(s.button, pathname === ROUTES_URL.PAYMENTS_LIST && s.active)}
          href={ROUTES_URL.PAYMENTS_LIST}
        >
          {pathname === ROUTES_URL.PAYMENTS_LIST ? <FilledPaymentIcon /> : <PaymentIcon />}
          {t.paymentsList}
        </Button>
        <Button
          as={Link}
          className={clsx(s.button, pathname === ROUTES_URL.POSTS_LIST && s.active)}
          href={ROUTES_URL.POSTS_LIST}
        >
          {pathname === ROUTES_URL.POSTS_LIST ? <FilledPostsIcon /> : <PostsIcon />}
          {t.postsList}
        </Button>
      </nav>
    </aside>
  )
}
