import {FC} from "react";
import CommentCard from "./commentCard.tsx";
import './exerciseFive.css'


const ExerciseFive: FC = () => {
  return (
    <div>
      <CommentCard avatar={'https://picsum.photos/200/300'} firstName={'Michiel'} lastName={'Wouters'} comment={'Hello Thomas More!'} />
      <hr/>
      <CommentCard avatar={'https://picsum.photos/200/300'} firstName={'Adrian'} lastName={'Dudley'} comment={'Are you looking for cheap meds? Contact Alaska.gov'} />
    </div>
  )
}

export default ExerciseFive