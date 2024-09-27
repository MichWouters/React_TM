import styled from 'styled-components'
import {FunctionComponent, useState} from 'react'

const Calculator = styled.div`
  padding: 1.5em 2em;
  background-color: #00ace6;
  max-width: 21em;
  border-radius: 10px;
  text-align: left;
  margin-top: 2em;
`

const CalculatorButton = styled.button`
  font-family: Verdana, serif;
  font-size: 2rem;
  margin: .25em;
  font-weight: bold;
  background-color: #CCCCCC;
  color: white;
  border-radius: 5px;
  width: 3em;
  height: 2em;
  display: inline-block;
  text-align: center;
  line-height: 2em;
`

const CalculatorScreen = styled.div`
  font-family: Verdana, serif;
  color: white;
  font-size : 2em;
  min-height: 2em;
`

const buttons = ['7', '8', '9', '4', '5', '6', '1', '2', '3', 'C', '0', 'Del']

const ExerciseSix: FunctionComponent = () => {
  const [screen, setScreen] = useState<string>('')

  const handleClick = (clickedButton: string) => {
    if(clickedButton === 'C'){
      setScreen('')
    }
    else if(clickedButton === 'Del'){
      setScreen(s => s.substring(0, s.length - 1))
    }
    else {
      setScreen(s => s + clickedButton)
    }
  }

  return (
    <Calculator>
      <CalculatorScreen>{screen}</CalculatorScreen>

      {buttons.map(x => (
        <CalculatorButton key={x} onClick={() => handleClick(x)}>
          {x}
        </CalculatorButton>
      ))}
    </Calculator>
  )
}

export default ExerciseSix