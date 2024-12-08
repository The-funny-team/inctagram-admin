import { useState } from 'react'
import { toast } from 'react-toastify'

import { useBanUserMutation } from '@/queries/user/user-ban.generated'
import { useTranslation } from '@/shared/lib/hooks'
import { Trans } from '@/shared/ui/Trans'
import { Button, Input, Modal, Select, Typography } from '@funnyteam/ui-kit'

import s from './BanUserModal.module.scss'

type Props = {
  isOpenBanModal: boolean
  refetch: () => void
  setIsOpenBanModal: (isOpenBanModal: boolean) => void
  setShowBanIcon: (value: boolean) => void
  userId: number
  userName: string
}

export const BanUserModal = ({
  isOpenBanModal,
  refetch,
  setIsOpenBanModal,
  setShowBanIcon,
  userId,
  userName,
}: Props) => {
  const { text } = useTranslation()

  const [reasonBan, setReasonBan] = useState('')
  const [anotherReason, setAnotherReason] = useState('')
  const [banUser, { error, loading }] = useBanUserMutation()

  const reasonForBan = [
    {
      label: text.modal.banUserModal.badBehavior,
      value: 'Bad behavior',
    },
    {
      label: text.modal.banUserModal.advertisingPlacement,
      value: 'Advertising placement',
    },
    {
      label: text.modal.banUserModal.anotherReason,
      value: 'Another reason',
    },
  ]

  const banUserHandler = async () => {
    try {
      await banUser({
        variables: {
          banReason: reasonBan !== 'Another reason' ? reasonBan : anotherReason,
          userId: userId,
        },
      })
      setIsOpenBanModal(false)
      setShowBanIcon(true)
      refetch()
    } catch (err) {
      toast.error(error?.message)
    }
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
        onValueChange={value => {
          setReasonBan(value)
          if (value !== 'Another reason') {
            setAnotherReason('')
          }
        }}
        options={reasonForBan}
        placeholder={text.modal.banUserModal.reasonForBan}
        value={reasonBan}
      />
      {reasonBan === 'Another reason' && (
        <Input
          className={s.inputReason}
          onValueChange={value => setAnotherReason(value)}
          placeholder={text.modal.banUserModal.enteredReason}
          type={'text'}
          value={anotherReason}
        />
      )}
      <div className={s.buttonsBlock}>
        <Button
          disabled={loading || !reasonBan || (reasonBan === 'Another reason' && !anotherReason)}
          fullWidth={false}
          onClick={banUserHandler}
          variant={'tertiary'}
        >
          {text.modal.yesButton}
        </Button>
        <Button
          disabled={loading}
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
