import { useAppContext } from "./components/PersonScoreContext";

export function Content(){
    const {permission} = useAppContext()

    if (permission === undefined){
        return null
    }
    return permission.includes('admin') ? (
        <p>Ważne informacje dla admina</p>
    ): (
        <p>Niedostępne</p>
    )
}