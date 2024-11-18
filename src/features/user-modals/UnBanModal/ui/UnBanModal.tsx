import { Button, Modal, Typography } from '@funnyteam/ui-kit'

import s from './UnBanModal.module.scss'

type Props = {
  isOpenUnBanModal: boolean
  setIsOpenUnBanModal: (isOpenBanModal: boolean) => void
  userId: number
  userName: string
}

export const UnBanModal = ({ isOpenUnBanModal, setIsOpenUnBanModal, userId, userName }: Props) => {
  return (
    <Modal
      className={s.modal}
      isOpen={isOpenUnBanModal}
      onIsOpenChange={setIsOpenUnBanModal}
      title={'Un-ban User'}
    >
      <Typography variant={'regularText16'}>Are you sure want to un-ban {userName}?</Typography>
      <div className={s.buttonsBlock}>
        <Button fullWidth={false} onClick={() => setIsOpenUnBanModal(false)}>
          No
        </Button>
        <Button fullWidth={false} variant={'tertiary'}>
          Yes
        </Button>
      </div>
    </Modal>
  )
}
