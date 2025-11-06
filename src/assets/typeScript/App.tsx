
import Counters from "./Reducers";
function Apps() {
    return (
        <>
        <Counters>{(num: number) => <>Current Count: {num}</>}</Counters>
        </>
    )
}

export default Apps;