import { useTranslation } from '@/shared/lib/hooks'
import { Trans } from '@/shared/ui/Trans'
import { Button, Modal, Typography } from '@funnyteam/ui-kit'

import s from './UnBanModal.module.scss'

type Props = {
  isOpenUnBanModal: boolean
  setIsOpenUnBanModal: (isOpenBanModal: boolean) => void
  userId: number
  userName: string
}

export const UnBanModal = ({ isOpenUnBanModal, setIsOpenUnBanModal, userId, userName }: Props) => {
  const { text } = useTranslation()
  const t = text.modal.unBanUserModal

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
        <Button fullWidth={false} variant={'tertiary'}>
          {text.modal.yesButton}
        </Button>
      </div>
    </Modal>
  )
}
