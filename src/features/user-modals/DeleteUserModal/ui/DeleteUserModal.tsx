import { toast } from 'react-toastify'

import { useRemoveUserMutation } from '@/queries/user/user.generated'
import { useTranslation } from '@/shared/lib/hooks'
import { Button, Modal, Typography } from '@funnyteam/ui-kit'

import s from './DeleteUserModal.module.scss'

type Props = {
  isOpenDeleteUserModal: boolean
  setIsOpenDeleteUserModal: (isOpenBanModal: boolean) => void
  userId: number
  userName: string
}

export const DeleteUserModal = ({
  isOpenDeleteUserModal,
  setIsOpenDeleteUserModal,
  userId,
  userName,
}: Props) => {
  const { text } = useTranslation()
  const [deleteUser, { loading }] = useRemoveUserMutation()

  const deleteUserHandler = async () => {
    try {
      await deleteUser({ variables: { userId: userId } })

      setIsOpenDeleteUserModal(false)
    } catch (err) {
      const errorMessage =
        typeof err === 'string' ? err : 'An error occurred while deleting the user.'

      toast.error(errorMessage)
    }
  }

  return (
    <Modal
      className={s.rootDeleteModal}
      isOpen={isOpenDeleteUserModal}
      onIsOpenChange={setIsOpenDeleteUserModal}
      title={text.modal.deleteUserModal.title}
    >
      <div className={s.logOutRoot}>
        <Typography as={'span'} variant={'regularText16'}>
          {text.modal.deleteUserModal.getQuestion(userName)}
        </Typography>

        <div className={s.buttonsBlock}>
          <Button
            disabled={loading}
            fullWidth={false}
            onClick={() => {
              setIsOpenDeleteUserModal(false)
            }}
            variant={'primary'}
          >
            {text.modal.noButton}
          </Button>
          <Button
            disabled={loading}
            fullWidth={false}
            onClick={deleteUserHandler}
            variant={'tertiary'}
          >
            {text.modal.yesButton}
          </Button>
        </div>
      </div>
    </Modal>
  )
}
