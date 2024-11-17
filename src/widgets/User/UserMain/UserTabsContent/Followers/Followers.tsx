import { useGetFollowersQuery } from '@/queries/user/user.generated'
import { useTranslation } from '@/shared/lib/hooks'
import { CommonFollow } from '@/widgets/User/UserMain/UserTabsContent/Follow/CommonFollow'

type Props = {
  userId: number
}
export const Followers = ({ userId }: Props) => {
  const { text } = useTranslation()
  const t = text.pages.user.tabs.followers.emptyTab

  return <CommonFollow emptyTab={t} followQuery={useGetFollowersQuery} userId={userId} />
}
