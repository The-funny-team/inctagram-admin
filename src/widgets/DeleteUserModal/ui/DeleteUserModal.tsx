import { useTranslation } from '@/shared/lib/hooks'
import { Button, Modal, Typography } from '@funnyteam/ui-kit'

import s from './DeleteUserModal.module.scss'

type Props = {
  isOpenBanModal: boolean
  setIsOpenBanModal: (isOpenBanModal: boolean) => void
  userId: number
  userName: string
}

export const DeleteUserModal = ({ isOpenBanModal, setIsOpenBanModal, userId, userName }: Props) => {
  const { text } = useTranslation()

  const deleteUserHandler = () => {
    console.log('delete user with id -', userId)
  }

  return (
    <Modal
      className={s.rootDeleteModal}
      isOpen={isOpenBanModal}
      onIsOpenChange={setIsOpenBanModal}
      title={text.modal.deleteUserModal.title}
    >
      <div className={s.logOutRoot}>
        <Typography as={'span'} variant={'regularText16'}>
          {text.modal.deleteUserModal.getQuestion(userName)}
        </Typography>

        <div className={s.buttonsBlock}>
          <Button
            fullWidth={false}
            onClick={() => {
              setIsOpenBanModal(false)
            }}
            variant={'primary'}
          >
            {text.modal.noButton}
          </Button>
          <Button fullWidth={false} onClick={deleteUserHandler} variant={'tertiary'}>
            {text.modal.yesButton}
          </Button>
        </div>
      </div>
    </Modal>
  )
}
