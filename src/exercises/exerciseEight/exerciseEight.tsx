import {FunctionComponent} from "react";
import Carousel from "./carousel.tsx";
import getRandomImage from "./images.ts";

const ExerciseEight: FunctionComponent = () => {

  return (
    <Carousel>
      <img src={getRandomImage()} alt='slide1'/>
      <img src={getRandomImage()} alt='slide2'/>
      <img src={getRandomImage()} alt='slide3'/>
      <img src={getRandomImage()} alt='slide4'/>
      <img src={getRandomImage()} alt='slide5'/>
    </Carousel>
  )
}

export default ExerciseEight;