import {FC} from "react";
import Star from "./star.tsx";
import Label from "./label.tsx";

interface RaterProps {
  rating: number
  max: number
}

const Rater: FC<RaterProps> = ({rating, max}) => {
  const score = rating / max
  const stars = []

  for (let i = 1; i <= max; i++) {
    stars.push(
      <Star key={i} isFull={i <= rating}/>
    )
  }

  return (
    <div className={'rater'}>
      <Label score={score}/>
      {stars}
    </div>
  )
}

export default Rater