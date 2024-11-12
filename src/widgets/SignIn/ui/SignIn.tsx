import { Controller } from 'react-hook-form'

import { useSignInMutation } from '@/queries/sign-in/sign-in.generated'
import { ROUTES_URL } from '@/shared/const'
import { saveToLocalStorage } from '@/shared/lib/helpers'
import { useTranslation } from '@/shared/lib/hooks'
import { SignInFormValuesType, useSignIn } from '@/widgets/SignIn/services'
import { Button, Card, Input, Typography } from '@funnyteam/ui-kit'
import { clsx } from 'clsx'

import s from './SignIn.module.scss'

export const SignIn = () => {
  const { router, text } = useTranslation()
  const t = text.pages.signIn
  const [login, { data: auth, error }] = useSignInMutation()

  const {
    control,
    formState: { isValid },
    handleSubmit,
    setError,
  } = useSignIn(text.validation)

  const onFormSubmit = handleSubmit((data: SignInFormValuesType) => {
    login({ variables: { email: data.email, password: data.password } })
      .then(() => {
        saveToLocalStorage('username', data.email)
        saveToLocalStorage('password', data.password)
        void router.push(ROUTES_URL.USERS_LIST)
      })
      .catch(err => setError('root', { message: error?.message }))
  })

  const classNames = {
    forgotLink: s.forgotLink,
    form: s.form,
    formInput(error?: string) {
      return clsx(s.formInput, error && s.formInputWithError)
    },
    formTitle: s.formTitle,
    root: s.root,
  }

  return (
    <Card className={classNames.root}>
      <Typography as={'h1'} className={classNames.formTitle} variant={'h1'}>
        {t.title}
      </Typography>

      <form className={classNames.form} onSubmit={onFormSubmit}>
        <Controller
          control={control}
          name={'email'}
          render={({ field, fieldState: { error } }) => (
            <Input
              className={classNames.formInput(error?.message)}
              error={error?.message}
              label={t.emailLabel}
              placeholder={'Epam@epam.com'}
              type={'text'}
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name={'password'}
          render={({ field, fieldState: { error } }) => (
            <Input
              autoComplete={'off'}
              className={classNames.formInput(error?.message)}
              label={t.passwordLabel}
              type={'password'}
              {...field}
            />
          )}
        />
        <Button disabled={!isValid} type={'submit'}>
          {t.title}
        </Button>
      </form>
    </Card>
  )
}
