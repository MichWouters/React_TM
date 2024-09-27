import MultiplicationTable from "./multiplicationTable.tsx";
import {FC} from "react";

const ExerciseOne: FC = () => {
  return (
    <div className='exercise'>
      <MultiplicationTable table={1}/>
      <MultiplicationTable table={2}/>
      <MultiplicationTable table={3}/>
    </div>
  )
}

export default ExerciseOne