import ComputerScientist from './ComputerScientist.tsx';
import {FunctionComponent} from 'react'

const ComputerScientistListV1: FunctionComponent = () => {
  return (
    <div>
      <h1>Famous computer scientists</h1>
      <ul>
        <ComputerScientist
          firstName={'Charles'}
          lastName={'Babbage'}
          birth={1791}
          death={1871}
          accomplishments={'Originated the concept of a programmable general-purpose computer. Designed the Analytical Engine and built a prototype for a less powerful mechanical calculator'}
        ></ComputerScientist>

        <ComputerScientist
          firstName={'Ada'}
          lastName={'Lovelace'}
          birth={1815}
          death={1871}
          accomplishments={'Originated the concept of a programmable general-purpose computer. Designed the Analytical Engine and built a prototype for a less powerful mechanical calculator'}
        ></ComputerScientist>

        <ComputerScientist
          firstName={'Michiel'}
          lastName={'Wouters'}
          birth={1987}
          death={2254}
          accomplishments={'Did some stuff'}
        ></ComputerScientist>
      </ul>
    </div>
  )
}

export default ComputerScientistListV1