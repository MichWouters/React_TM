import {FunctionComponent} from "react";

const HelloWorld: FunctionComponent = () => {
  const myGreeting = {
    greeting1: 'World',
    greeting2: 'Universe',
    greeting3: 'Thomas More'
  }

  return (
    <div>
      <h1>Hello {myGreeting.greeting3} How are you today?</h1>
      <h1>Hello {myGreeting.greeting1}</h1>
    </div>
  )
}

//const HelloWorldDefault = HelloWorld
export default HelloWorld