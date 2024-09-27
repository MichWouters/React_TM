import {ChangeEventHandler, FC} from "react";

interface SliderProps {
  value: number
  min: number
  max: number
  changeHandler: ChangeEventHandler<HTMLInputElement>
}

const Slider: FC<SliderProps> = ({value, min, max, changeHandler}) => {
  return (
    <input type='range'
           value={value}
           min={min}
           max={max}
           onChange={changeHandler}
    />
  )
}

export default Slider