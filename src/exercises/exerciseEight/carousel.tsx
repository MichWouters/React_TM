import {Children, FC, PropsWithChildren, useState} from 'react'
import CarouselContainer from "./carouselContainer.tsx";
import ControlButton from "./controlButton.tsx";

const Carousel: FC<PropsWithChildren> = ({children}) => {
  //State variables
  const [currentImage, setCurrentImage] = useState<number>(0)
  const [currentDirection,setCurrentDirection] = useState<'left' | 'right' | 'none'>('none')

  // Datasource -> Via Input
  const myImages = Children.toArray(children)

  const goToPreviousSlide = () : void => {
    setCurrentImage(x => (x === 0 ? myImages.length -1 : x -1)) // Staan we op 0? Ga dan naar laatste element
    setCurrentDirection('left')
  }

  const goToNextSlide = () : void => {
    setCurrentImage(x => (x + 1) % myImages.length)
    setCurrentDirection('right')
  }

  let previousActiveSlide = undefined
  if (currentDirection === 'left') {
     previousActiveSlide = currentImage === myImages.length - 1 ? 0: currentImage + 1
  }
  else if (currentDirection === 'right') {
    previousActiveSlide = currentImage === 0 ? myImages.length - 1 : currentImage - 1
  }

  const slide1 = myImages[currentImage];
  const slide2 = previousActiveSlide !== undefined ? myImages[previousActiveSlide] : <></>

  return(
    <CarouselContainer>
      <ControlButton isPrevious={true} onClick={goToPreviousSlide}>&lt;</ControlButton>
        <>{slide1}</>
        <>{slide2}</>
      <ControlButton isPrevious={false} onClick={goToNextSlide}>&gt;</ControlButton>
    </CarouselContainer>
  )}

export default Carousel