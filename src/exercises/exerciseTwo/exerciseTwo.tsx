import {FC} from "react";
import Rater from "./rater.tsx";

const ExerciseTwo: FC = () => {
  return (
    <div className={'exercise'}>
      <Rater rating={7} max={10} />
      <Rater rating={1} max={5} />
      <Rater rating={3} max={3} />
    </div>
  )
}

export default ExerciseTwo