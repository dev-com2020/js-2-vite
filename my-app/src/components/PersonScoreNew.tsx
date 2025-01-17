import { useEffect, useMemo, useReducer, useState } from "react";
import { getPerson } from "../data/getPerson";

function ExpensiveFunction() {
    console.log('Wykonujemy funkcje obliczeniową')
    let sum = 0
    for (let i = 0; i < 1000; i++) {
        sum += i
    }
    return sum
}

type State = {
    name: string | undefined
    score: number
    loading: boolean
}
type Action =
    | {
        type: 'initialize'
        name: string
    }
    | {
        type: 'increment'
    }
    | {
        type: 'decrement'
    }
    | {
        type: 'reset'
    }

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'initialize':
            return { name: action.name, score: 0, loading: false }
        case 'increment':
            return { ...state, score: state.score + 1 }
        case 'decrement':
            return { ...state, score: state.score - 1 }
        case 'reset':
            return { ...state, score: 0 }
        default:
            return state
    }
}

export function PersonScoreNew() {

    const [count, setCount] = useState(0)
    const [{ name, score, loading }, dispatch] = useReducer(reducer, {
        name: undefined,
        score: 0,
        loading: true,
    })

    useEffect(() => {
        getPerson().then(({ name }) => dispatch({ type: 'initialize', name }))
    }, [])

    const Calculation = useMemo(() => {
        ExpensiveFunction()
        return count * 2
    }, [count])

    if (loading) {
        return <div>Ładowanie komponentu...</div>
    }
    return (
        <>
            <h3>
                {name}, {score}
            </h3>
            <p>{Calculation}</p>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
            <button onClick={() => setCount(count +1)}>Sprawdzamy</button>
        </>
    )
}