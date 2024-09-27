import styled from 'styled-components'
import {ChangeEvent, FunctionComponent, useState} from 'react'
import Slider from "./slider.tsx";

const BmiLabel = styled.div`
    font-family: Verdana, serif;
    font-size: 20px;
`
const BMIContainer = styled.div`
    padding: 20px 40px;
    border: #333 2px dotted;
    width: 450px;
    border-radius: 10px;
    text-align: left;
    margin-top: 2em;
`
const ExerciseSeven: FunctionComponent = () => {
  const calculateBMI = (hoogteInCm: number, gewicht: number): number => {
    const hoogteInM = hoogteInCm / 100
    const bmi = gewicht / (hoogteInM * hoogteInM)

    return Math.round(bmi)
  }

  const [height, setHeight] = useState<number>(160)
  const [weight, setWeight] = useState<number>(60)

  return (
    <BMIContainer>
      <BmiLabel>Height: {height}</BmiLabel>
      <Slider value={height}
              min={70}
              max={220}
              changeHandler={(evt: ChangeEvent<HTMLInputElement>) => setHeight(Number(evt.target.value))}
      />

      <BmiLabel>Weight: {weight}</BmiLabel>
      <Slider value={weight}
              min={30}
              max={150}
              changeHandler={(evt: ChangeEvent<HTMLInputElement>) => setWeight(Number(evt.target.value))}
      />

      <BmiLabel> BMI: {calculateBMI(height, weight)}</BmiLabel>
    </BMIContainer>
  )
}

export default ExerciseSeven
