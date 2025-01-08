import { useReducer } from "react"


type State = { count: number}
type Action = { type: 'increment' | 'decrement'}

function reducer(state: State, action: Action):State {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1}
        case 'decrement':
            return {count: state.count - 1}
        default:
            throw new Error('Błąd!')
    }
}

export function Counter(){
    const [state,dispatch] = useReducer(reducer, {count: 0})

    return (
        <>
        <div>
            <p>Licznik: {state.count}</p>
            <button onClick={()=> dispatch({type: 'increment'})}>+</button>
            <button onClick={()=> dispatch({type: 'decrement'})}>-</button>
        </div>
        </>
    )
}