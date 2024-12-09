import { useContext } from "react"
import { Context } from "./Provider"

export default function useDataContext(){
    return useContext(Context)
}
