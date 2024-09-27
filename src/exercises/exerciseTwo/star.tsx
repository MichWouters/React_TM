import {FC} from "react";
import {Icon} from '@iconify-icon/react'

interface StarProps {
  isFull: boolean
}

const Star: FC<StarProps> = ({isFull}) => {
  const fullIcon: string = 'ic:baseline-star'
  const emptyIcon: string = 'uil:star'

  return (
    <Icon icon={isFull ? fullIcon : emptyIcon}/>
  )
}

export default Star