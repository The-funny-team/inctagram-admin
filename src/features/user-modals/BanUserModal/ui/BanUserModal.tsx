import { useState } from 'react'

import { useTranslation } from '@/shared/lib/hooks'
import { Trans } from '@/shared/ui/Trans'
import { Button, Modal, Select, Typography } from '@funnyteam/ui-kit'

import s from './BanUserModal.module.scss'
type Props = {
  isOpenBanModal: boolean
  setIsOpenBanModal: (isOpenBanModal) => void
  userId: number
  userName: string
}

export const BanUserModal = ({ isOpenBanModal, setIsOpenBanModal, userId, userName }: Props) => {
  const { text } = useTranslation()

  const [reasonBan, setReasonBan] = useState('')

  const reasonForBan = [
    {
      label: text.modal.banUserModal.anotherReason,
      value: 'anotherReason',
    },
    {
      label: text.modal.banUserModal.badBehavior,
      value: 'badBehavior',
    },
    {
      label: text.modal.banUserModal.advertisingPlacement,
      value: 'advertising',
    },
  ]

  const banUserHandler = () => {
    console.log('sent request to ban -' + reasonBan)
  }

  return (
    <Modal
      className={s.rootBanModal}
      isOpen={isOpenBanModal}
      onIsOpenChange={setIsOpenBanModal}
      title={text.modal.banUserModal.title}
    >
      <Typography as={'span'} variant={'regularText16'}>
        <Trans
          tags={{
            1: () => (
              <Typography as={'span'} variant={'boldText16'}>
                {userName}?
              </Typography>
            ),
          }}
          text={text.modal.banUserModal.getQuestion}
        />
      </Typography>
      <Select
        className={s.selectReason}
        onValueChange={setReasonBan}
        options={reasonForBan}
        placeholder={text.modal.banUserModal.reasonForBan}
        value={reasonBan}
      />
      <div className={s.buttonsBlock}>
        <Button fullWidth={false} onClick={banUserHandler} variant={'tertiary'}>
          {text.modal.yesButton}
        </Button>
        <Button
          fullWidth={false}
          onClick={() => {
            setIsOpenBanModal(false)
          }}
          variant={'primary'}
        >
          {text.modal.noButton}
        </Button>
      </div>
    </Modal>
  )
}
