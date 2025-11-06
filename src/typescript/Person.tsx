import { PersonProps } from "./person.types"

export const Person = (props: PersonProps) => {
  return (
    <div>
     <h1>{props.names.name}</h1>
    </div>
  )
}


