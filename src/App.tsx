import { Children, useState } from 'react'
import DarkMode from './assets/typeScript/darkMode.tsx'
import Count from './assets/typeScript/count.tsx'
import Apps from './assets/typeScript/App.tsx'
import Counters from './assets/typeScript/Reducers.tsx'
import Props from './typescript/Props.tsx'
import { Person } from './typescript/Person.tsx'
import PersonList from './typescript/PersonList.tsx'
import Status from './typescript/Status.tsx'
import { Heading } from './typescript/Heading.tsx'
import Oscar from './typescript/Oscar.tsx'
import { Button } from './typescript/Button.tsx'
import Input from './typescript/Input.tsx'
import Container from './typescript/Container.tsx'
import { Counter } from './typescript/state/Counter.tsx'
const ListNames = [
  {
    first: "Hello",
    last: "world",
  },
  {
    first: "Clerk",
    last: "World",
  }
];

function App() {
  const personName= {
    name: "Satheesh",
  }

  return (
    <>
      <div>
       <Props name={"Satheesh"} messageCount={20} isLoggedIn={true}/>
       <Person names={personName} />
       <PersonList names={ListNames} />
       <Status status="loading1212" />
       
       <Oscar><Heading>Placeholder Text</Heading></Oscar>
       <Button handleClick={(event, id) => console.log("click me", event, id)}>click</Button>
       <Input value="" handleClick={(event) => console.log(event)} />
       <Container styles={{border: '1px solid black', padding: '1rem'}} />
       <Counter />
       </div>
    </>
  )
}

export default App
