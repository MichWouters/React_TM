import {FC} from 'react'
import CommentSection from "./commentSection.tsx";

interface CommentCardProps{
  avatar: string

  // Room for improvement here
  firstName: string
  lastName: string
  comment: string
}

const CommentCard: FC<CommentCardProps> = ({avatar, firstName, lastName, comment}) => {

  return (
    <div className="card">
      <img className="avatar" src={avatar} alt={'avatar'} />

      <CommentSection
        firstName={firstName}
        lastName={lastName}
        comment={comment}
        />
    </div>
  )
}

export default CommentCard