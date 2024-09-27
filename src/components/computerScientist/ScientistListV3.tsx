import {FunctionComponent, ReactNode} from "react";
import ComputerScientist from "./ComputerScientist.tsx";
import IComputerScientist from "../../models/IComputerScientist.tsx";

interface Props {
  scientists: IComputerScientist[]
}

const ComputerScientistListV3: FunctionComponent<Props> = ({scientists}) => {
  const output: ReactNode[] = []

  for (const scientist of scientists) {
    /*output.push(
      <computerScientist
        firstName={scientist.firstName}
        lastName={scientist.lastName}
        birth={scientist.birth}
        death={scientist.death}
        accomplishments={scientist.accomplishments}
      />,*/

    output.push(<ComputerScientist {...scientist} />)
  }

  return (
    <div>
      <h1>Famous computer scientists</h1>
      <ul>
        {output}
      </ul>
    </div>
  )
}

export default ComputerScientistListV3;