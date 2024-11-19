import { toast } from 'react-toastify'

import { useUnbanUserMutation } from '@/queries/user/user-unban.generated'
import { useTranslation } from '@/shared/lib/hooks'
import { Trans } from '@/shared/ui/Trans'
import { Button, Modal, Typography } from '@funnyteam/ui-kit'

import s from './UnBanModal.module.scss'

type Props = {
  isOpenUnBanModal: boolean
  setIsOpenUnBanModal: (isOpenBanModal: boolean) => void
  setShowBanIcon: (value: boolean) => void
  userId: number
  userName: string
}

export const UnBanModal = ({
  isOpenUnBanModal,
  setIsOpenUnBanModal,
  setShowBanIcon,
  userId,
  userName,
}: Props) => {
  const { text } = useTranslation()
  const t = text.modal.unBanUserModal

  const [unban, { error, loading }] = useUnbanUserMutation()

  const unBanUserHandler = async () => {
    try {
      await unban({
        variables: { userId },
      })
      setIsOpenUnBanModal(false)
      setShowBanIcon(false)
    } catch (err) {
      toast.error(error?.message)
    }
  }

  return (
    <Modal
      className={s.modal}
      isOpen={isOpenUnBanModal}
      onIsOpenChange={setIsOpenUnBanModal}
      title={'Un-ban User'}
    >
      <Typography variant={'regularText16'}>
        <Trans
          tags={{
            1: () => (
              <Typography as={'span'} variant={'boldText16'}>
                {userName}?
              </Typography>
            ),
          }}
          text={t.getQuestion}
        />
      </Typography>
      <div className={s.buttonsBlock}>
        <Button fullWidth={false} onClick={() => setIsOpenUnBanModal(false)}>
          {text.modal.noButton}
        </Button>
        <Button fullWidth={false} onClick={unBanUserHandler} variant={'tertiary'}>
          {text.modal.yesButton}
        </Button>
      </div>
    </Modal>
  )
}
