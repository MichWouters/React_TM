import {FunctionComponent} from "react";

interface HeaderProps {
  table: number
}

const translate: Record<number, string> = {
  1: 'One',
  2: 'Two',
  3: 'Three',
  4: 'Four',
  5: 'Five',
  6: 'Six',
  7: 'Seven',
  8: 'Eight',
  9: 'Nine',
}

const translateNumberToWord = (number: number) => {
  return translate[number]
}

const Header: FunctionComponent<HeaderProps> = ({table}) => {
  return (
    <div className={'header'}>
      {/*{translate[table]}*/}
      {translateNumberToWord(table)}
    </div>
  )
}

export default Header