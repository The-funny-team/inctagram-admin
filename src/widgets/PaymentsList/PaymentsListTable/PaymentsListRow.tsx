import { Avatar, TableCell, TableRow, Typography } from '@funnyteam/ui-kit'

import s from './PaymentsListTable.module.scss'

export const PaymentsListRow = () => {
  return (
    <>
      <TableRow>
        <TableCell>
          <div className={s.userNameCell}>
            <Avatar
              size={36}
              src={
                'https://funny-inctagram.site/_next/image?url=https%3A%2F%2Fstaging-it-incubator.s3.eu-central-1.amazonaws.com%2Ftrainee-instagram-api%2FImage%2F4164019e-a863-4222-ab5b-e2657e8a8bb2_users%2F848%2Favatar%2Fc309d797-46fe-4711-89a3-0349d083982f-images-192x192&w=640&q=75'
              }
              userName={'la'}
            />
            <Typography variant={'regularText14'}>userName</Typography>
          </div>
        </TableCell>
        <TableCell>
          <Typography variant={'regularText14'}>12.12.2022</Typography>
        </TableCell>
        <TableCell>
          <Typography variant={'regularText14'}>50$</Typography>
        </TableCell>
        <TableCell>
          <Typography variant={'regularText14'}>1 day</Typography>
        </TableCell>
        <TableCell>
          <Typography variant={'regularText14'}>Stripe</Typography>
        </TableCell>
      </TableRow>
    </>
  )
}
