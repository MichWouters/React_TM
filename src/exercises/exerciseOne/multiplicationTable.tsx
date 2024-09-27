import {FC} from "react";
import Header from "./header.tsx";
import Row from "./row.tsx";

interface MultiplicationTableProps  {
  table: number
}

const MultiplicationTable: FC<MultiplicationTableProps> = ({table}) => {
  const rows = []

  for (let i = 1; i < 11; i++){
    rows.push(<Row key={i * table} factor1={i} factor2={table} />)
  }

  return (
    <div className={"table"}>
      <Header table={table}/>
      {rows}
    </div>
  )
}

export default MultiplicationTable