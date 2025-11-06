
import { CounterProvider } from "./CounterContext";
import { initialState } from "./CounterContext";
import Counters from "../counters";
function Apps() {
    return (
        <>
        <CounterProvider count={initialState.count} text={initialState.text}>

        <Counters>{(num: number) => <>Current Count: {num}</>}</Counters>
        </CounterProvider>
        </>
    )
}

export default Apps;