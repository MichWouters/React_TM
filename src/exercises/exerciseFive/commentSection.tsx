import {FC, useState} from "react";

interface CommentSectionProps {
  firstName: string;
  lastName: string;
  comment: string;
}

const CommentSection: FC<CommentSectionProps> = ({firstName, lastName, comment}) => {
  const [toggleShowComment, setToggleShowComment] = useState<boolean>(false)

  const isTextLongerThan30 = comment.length > 30

  const toggleShowMore = () => {
    setToggleShowComment(!toggleShowComment)
  }

  return (
    <div className="commentSection">
      <div className="author">
        {firstName} {lastName}
      </div>

      <div className={'content'}>
        {isTextLongerThan30 && !toggleShowComment
          ? `${comment.slice(0, 30)}...`
          : comment}
      </div>

      {isTextLongerThan30 &&
          <span className={'showMore'} onClick={toggleShowMore}>
            {toggleShowComment ? 'Show less' : 'Show more'}
        </span>
      }
    </div>
  )
}
export default CommentSection
