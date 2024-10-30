import { ComponentPropsWithoutRef } from 'react'

import { useTranslation } from '@/shared/lib/hooks'
import { Select, Typography } from '@funnyteam/ui-kit'
import { clsx } from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import s from './Header.module.scss'

import { en, ru } from '../../../locales'
import flagRu from '/public/flagRussia.png'
import flagEng from '/public/flagUnitedKingdom.png'

const languageOptions = [
  {
    label: (
      <>
        <Image alt={'flag russian'} height={20} src={flagRu} width={20} />
        <span>Russian</span>
      </>
    ),
    value: 'ru',
  },
  {
    label: (
      <>
        <Image alt={'flag english'} height={20} src={flagEng} width={20} />
        <span>English</span>
      </>
    ),
    value: 'en',
  },
]

export const Header = ({ className, ...restProps }: ComponentPropsWithoutRef<'header'>) => {
  const { router, text } = useTranslation()

  const changeLangHandler = (value: string) => {
    void router.push({ pathname: router.pathname, query: router.query }, router.asPath, {
      locale: value,
    })
  }

  const classNames = {
    container: s.container,
    header: clsx(s.header, className),
    headerDashboard: s.headerDashboard,
    link: s.link,
  }

  return (
    <header className={classNames.header} {...restProps}>
      <div className={classNames.container}>
        <div>
          <Typography as={Link} className={classNames.link} href={'/'} variant={'large'}>
            Inctagram
          </Typography>
          <Typography as={'span'} variant={'smallText'}>
            Super
          </Typography>
          <Typography as={'span'} variant={'semiBoldSmallText'}>
            Admin
          </Typography>
        </div>
        <div className={classNames.headerDashboard}>
          <Select
            onValueChange={changeLangHandler}
            options={languageOptions}
            value={router.locale}
          />
        </div>
      </div>
    </header>
  )
}
