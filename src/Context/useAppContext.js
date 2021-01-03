import {createContext, useContext, useState, useEffect} from "react"
/* import uuid from 'uuid'  */


//tenemos que mandar como variable el contador y el carrito
const AppContext = createContext()
const useAppContext = () => useContext(AppContext)


export const AppProvider = ({children}) => {

  const [products, setproducts] = useState([])
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailValidation, setEmailValidation] = useState("");
  const [phone, setPhone] = useState("");
  //const [order, SetOrder] = useSta

  
const addProduct = (product, quantity) => {
  const existing = products.find((p) => p.id === product.id)

  if(existing){
    existing.quantity += quantity
    setproducts([...products])
  }
  
  else{
    setproducts([...products, {product, quantity}])
  }
}

const priceCount = () => {
  return products.reduce((acc,p) => (acc += p.quantity * p.product.price), 0)
}

const productsCount = () => {
  return products.reduce((acc, p) =>  (acc += p.quantity), 0)
}

const deleteProduct = (id) => {
  products.splice(
    products.findIndex(p => p.id === id), 1
  )
  setproducts([...products])
}




    return (
    <AppContext.Provider value={{products, addProduct, productsCount, deleteProduct,priceCount, name, setName, email,setEmail, emailValidation,setEmailValidation, phone, setPhone}}>{children}</AppContext.Provider>
    )
}

export default useAppContext
