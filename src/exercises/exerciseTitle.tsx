import {CSSProperties, FunctionComponent} from "react";

interface ExerciseTitleProps {
  title: string
}

const style: CSSProperties = {
    fontFamily: 'Lucida Sans',
    fontSize: '3rem',
    letterSpacing: '3px',
    color: 'RED',
    fontWeight: '300',
    fontStyle: 'oblique',
    lineHeight: '1.'
}

const ExerciseTitle: FunctionComponent<ExerciseTitleProps> = ({title}) => {
  return (
    <div style={style}>{title}</div>
  )
}

export default ExerciseTitle



