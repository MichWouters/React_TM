import NumberGrid from './numberGrid'
import {FunctionComponent} from 'react'

const ExerciseFour: FunctionComponent = () => {
  return (
    <div>
      <NumberGrid n={2} />
      <NumberGrid n={3} />
      <NumberGrid n={5} />
    </div>
  )
}

export default ExerciseFour