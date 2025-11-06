import React from 'react'

type greetProps = {
    name: string,
    messageCount: number,
    isLoggedIn: boolean,

}

const Props = ({name, messageCount, isLoggedIn}: greetProps) => {
  return (
    <div>
     {isLoggedIn && <h1>Welcome to {name} {messageCount}</h1>
    } 
    </div>
  )
}

export default Props
