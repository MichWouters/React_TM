// Importeren van react-dom, de bibliotheek die het renderen mogelijk maakt.
import ReactDOM from 'react-dom/client'
import {StrictMode} from 'react'

import Exercise from "./exercises/exercise.tsx";

import './assets/main.css'
import  './assets/exerciseOne.css'
import  './assets/exerciseTwo.css'

import ExerciseOne from "./exercises/exerciseOne/exerciseOne.tsx";
import ExerciseTwo from "./exercises/exerciseTwo/exerciseTwo.tsx";
import ExerciseFour from "./exercises/exerciseFour/exerciseFour.tsx";
import ExerciseSix from "./exercises/exerciseSix/exerciseSix.tsx";
import ExerciseSeven from "./exercises/exerciseSeven/exerciseSeven.tsx";
import ExerciseFive from "./exercises/exerciseFive/exerciseFive.tsx";
import ExerciseEight from "./exercises/exerciseEight/exerciseEight.tsx";
import ExerciseNine from "./exercises/exerciseNine/exerciseNine.tsx";
import ExerciseThree from "./exercises/exerciseThree/exerciseThree.tsx";

// Aanmaken van de root voor de React applicatie.
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <StrictMode>
    <Exercise title={'Exercise1: Multiplication Table'}>
      <ExerciseOne />
    </Exercise>

    <Exercise title={'Exercise2: Rater'} bgColor={'#77EEEE'}>
      <ExerciseTwo />
    </Exercise>

    <Exercise title={'Exercise3: Progressbar'}>
      <ExerciseThree />
    </Exercise>

    <Exercise title={'Exercise4: Number grid'} bgColor={'#99EEEE'}>
      <ExerciseFour />
    </Exercise>

    <Exercise title={'Exercise5: Comment card'}>
     <ExerciseFive />
    </Exercise>

    <Exercise title={'Exercise 6: Calculator'}>
      <ExerciseSix />
    </Exercise>

    <Exercise title={'Exercise 7: BMI Calculator'}>
      <ExerciseSeven />
    </Exercise>

    <Exercise title={'Exercise 8: Image Carousel'}>
      <ExerciseEight />
    </Exercise>

    <Exercise title={'Exercise 9: Tabs'}>
      <ExerciseNine />
    </Exercise>
  </StrictMode>
)