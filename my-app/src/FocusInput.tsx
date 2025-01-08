import { useRef } from "react";

export function FocusInput(){
    const inputRef = useRef<HTMLInputElement>(null)

    const FocusInput = () => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }

    return (
        <>
        <div>
            <input ref={inputRef} type="text"/>
            <button onClick={FocusInput}>FOCUS</button>
        </div>
        </>
    )
}