import { useEffect } from "react";
import { getPerson } from "./getPerson";

function ExpensiveFunction() {
    console.log('Wykonujemy funkcje obliczeniową')
    let sum = 0
    for (let i = 0; i < 10000; i++){
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
    |   { 
    type: 'initialize'
    name: string
    }
    |   {
    type: 'increment'
    }
    |   {
    type: 'decrement'
    }
    |   {
    type: 'reset'   
    }

function reducer(state: State, action: Action):State {
    switch (action.type) {
        case 'initialize':
            return {name: action.name, score: 0, loading: false}
        case 'increment':
            return {...state, score: state.score + 1}
        case 'decrement':
            return {...state, score: state.score - 1}
        case 'reset':
            return {...state, score: 0}
        default:
            return state
    }
}

export function PersonScore(){
    useEffect(() => {
        getPerson().then((person) => console.log(person))
    }, [])
    return null
}