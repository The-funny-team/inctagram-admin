import { useGetFollowingQuery } from '@/queries/user/user.generated'
import { useTranslation } from '@/shared/lib/hooks'
import { CommonFollow } from '@/widgets/User/UserMain/UserTabsContent/Follow/CommonFollow'

type Props = {
  userId: number
}
export const Following = ({ userId }: Props) => {
  const { text } = useTranslation()
  const t = text.pages.user.tabs.following.emptyTab

  return <CommonFollow emptyTab={t} followQuery={useGetFollowingQuery} userId={userId} />
}
