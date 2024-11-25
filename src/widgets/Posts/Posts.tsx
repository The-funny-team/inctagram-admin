import { Post, Scalars } from '@/types'
import { PostItem } from '@/widgets/Posts/Post/Post'

const postItem: Post = {
  createdAt: '2024-11-24T16:46:22.519Z',
  description:
    'adasfmlkfmdslnfdnfldndknlkng grhgrrjmvrijvy ry vryhrhweyior rhyroeiwhyoryreh yveryrehyorreog grhgoirhwroghwerohgerg rgierg regerg',
  id: 0,
  images: [
    {
      createdAt: '2024-11-24T16:46:22.519Z',
      fileSize: 123999,
      url: 'https://staging-it-incubator.s3.eu-central-1.amazonaws.com/trainee-instagram-api/Image/1e0370a5-cc7d-4be4-80c1-12daab7bae58_users/848/post/edee7566-7cd4-41dc-96f7-bfa788fa83d5-images-1440x1440',
    },
  ],
  ownerId: 1787,
  postOwner: {
    avatars: [
      {
        __typename: 'Avatar',
        height: 192,
        url: 'https://staging-it-incubator.s3.eu-central-1.amazonaws.com/trainee-instagram-api/Image/4164019e-a863-4222-ab5b-e2657e8a8bb2_users/848/avatar/c309d797-46fe-4711-89a3-0349d083982f-images-192x192',
        width: 192,
      },
    ],
    id: 1,
    userName: 'Alex',
  },
  updatedAt: '2024-11-24T16:46:22.519Z',
  userBan: {
    createdAt: '2024-11-24T16:46:22.519Z',
    reason: 'ban',
  },
}

export const Posts = () => {
  return (
    <div>
      <PostItem post={postItem} />
    </div>
  )
}
