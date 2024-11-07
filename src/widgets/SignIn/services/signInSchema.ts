import { LocaleType } from '@locales/en'
import { z } from 'zod'

export const signInSchema = (t: LocaleType['validation']) => {
  return z.object({
    email: z.string().email({ message: t.emailVerification }).trim().toLowerCase(),
    password: z.string().trim(),
  })
}

export type SignInFormValuesType = z.infer<ReturnType<typeof signInSchema>>
