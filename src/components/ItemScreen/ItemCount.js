import {useContext, useState} from "react"
import useAppContext from "../../Context/useAppContext"


export default function ItemCount ({min, max, initial, onChange}){
  const [counter, setCounter] = useState(initial)


 const addToCounter = () => {
     if (counter < max){
       setCounter(counter + 1)
       onChange(counter + 1)
     }
 }
 const substractCounter = () => {
     if (counter > min) {
       setCounter(counter - 1) 
       onChange(counter -1)
     }
 }
 

return(
   <>
    <div className="flex-container">
    <button onClick={(e) => substractCounter(e)}>
      -
    </button>
    {counter}
    <button onClick={(e) => addToCounter(e)}>
      +
    </button>
  </div>
   </>
)
}