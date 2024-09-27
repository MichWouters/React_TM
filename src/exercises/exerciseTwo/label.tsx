import {FC} from "react";

interface LabelProps {
  score: number
}

const Label: FC<LabelProps> = ({score}) => {
  let result = ''

  if (score < 0.1) result = 'Disaster'
  else if (score <= 0.3) result = 'Insufficient'
  else if (score <= 0.5) result = 'Sufficient'
  else if (score <= 0.6) result = 'Average'
  else if (score <= 0.8) result = 'Good'
  else if (score <= 0.9) result = 'Very good'
  else result = 'Excellent'

  return (
    <div>
      {result}
    </div>
  )
}


export default Label