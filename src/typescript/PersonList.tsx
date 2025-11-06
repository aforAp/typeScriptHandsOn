import { Name } from "./person.types"
type PersonListProps = {
  names: Name[]
}

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map(name => {
        return (
            <div>
            <h2>{name.first}</h2>
            <h3>{name.last}</h3>
        </div>
        )
      })}
    </div>
  )
}

export default PersonList
