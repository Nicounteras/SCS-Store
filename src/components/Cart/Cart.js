import useAppContext from "../../Context/useAppContext"
import { Link } from "react-router-dom"
import {useState, useEffect} from "react"
import LoadingContainer from "../Loading/LoadingContainer"
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Icon from "../../Icon"
import { getFirebase, getFirestore } from "../../firebase";
import CartForm from "./CartForm"


function NoItems () {
    return (
        <div className="no-items-div">
                <p>No tienes artículos en el carrito</p>
                <Link to="/" className="button primary">Descubrir prendas</Link>
        </div>
    )
}


const CartContainer = () => {
    const FirstToggle = useMediaQuery('(max-width:768px)');
    const SecondToggle = useMediaQuery("(max-width:475px)")
    const {products, deleteProduct, priceCount, name, email, phone} = useAppContext()
    const handleDelete = (product) => {
        deleteProduct(product.id)
    }


  const [loader, setLoader] = useState(false);


  const handleSubmit = (e) => {
      console.log("ya")
    const db = getFirestore()
    e.preventDefault();
    setLoader(true);
    db.collection("ventas")
      .add({ name: name,
        email: email,
        phone: phone, items: products, total: priceCount()})
      .then(({id}) => {
       setLoader(true)
       alert("Hola")
       console.log(name, email, phone, products, priceCount())
      })
      .catch(() => {
        alert("Tu compra no se efectuó con éxito, te pedimos intentar de nuevo");
      });

   /*  setName("");
    setEmail("");
    setPhone(""); */
  };

    

return(
    <>
    { products.length === 0 ? <NoItems/> : 
<div className="cart">
<table>
        <tr className="table-header">
            <th>Producto</th>
            {SecondToggle ? null : <th>P. Unit</th>}
            <th>{SecondToggle ? "Cant." : "Cantidad"}</th>
            <th>P. Total</th>
            <th></th>
        </tr>
    { products.map(product => {
    return (
    <tr key={product.product.id}>
    <td>{product.product.product} </td>
    {SecondToggle ? null : <td>s/{product.product.price}</td>}
    <td>{product.quantity}</td>
    <td>s/{product.product.price * product.quantity} </td>
    <td onClick={() => handleDelete(product)}><span className="eliminate-button">{FirstToggle ? <Icon iconName="fas fa-trash"/> : "Eliminar"}</span></td>
    </tr>
    
    )
 }) }  
 </table> 
<ul className="total-payment-section">
    <li> 
        <span>
     Total a pagar: s/{priceCount()}
     </span>
   </li>
</ul>
 <CartForm/>
</div>
       }
</>
)

}

const Cart = () => {

    const [loading, setloading] = useState(true)
  

    useEffect(async () => {
        setTimeout(() => {
            setloading(false)
        }, 1000)
      }, [])

    return(
       <> { loading ? 
            <LoadingContainer/> : 
           <CartContainer/>
        }
        </>
    )
}
export default Cart
