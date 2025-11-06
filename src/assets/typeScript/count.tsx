import React, {useCallback, useEffect, useRef, useState, useMemo, MouseEvent, KeyboardEvent} from 'react'

interface User {
    id: number,
    username: string,
}

type fibFunc = (n : number) => number;

const fib: fibFunc = (n) => {
    if ( n < 2) return n;
   let a = 0, b = 1;
   for (let i = 2; i <= n; i++) {
    [a, b] = [b , a + b];
   }
   return b;
}


const Count = () => {
    const [number, setNumber] = useState<number>(0);
    const [users, setUsers] = useState<User[] | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    console.log(inputRef?.current);
    console.log(inputRef?.current?.value);
    const myNumber : number = 112;

    useEffect(() => {
      console.log("mounting....");
      return () => console.log("unmounting......");
    }, [users]);

    const addTwo = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>):void => setNumber(prev => prev + 2), []);
     const result = useMemo<number>(() => fib(myNumber), [myNumber]);
  return (
    <div>
     <h1>{number}</h1>
     <button onClick={addTwo}>Add +2</button>
     <h2>result was : {result}</h2>
     <input type="text" ref={inputRef} />
      
    </div>
  )
}

export default Count;
