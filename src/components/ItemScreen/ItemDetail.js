import ItemCount from "./ItemCount"
import { Link, useParams } from "react-router-dom"
import { useContext, useState, useEffect } from "react";
import useAppContext from "../../Context/useAppContext";

const UnexistentProduct = () => {
  return(
    <div className="no-items-div">
      <p>El producto que buscas no está disponible.</p>
      <Link to="/" className="button primary">Descubrir prendas</Link>
    </div>
  )
}

export default function ItemDetail({detail}){

    const {addProduct} = useAppContext()
   const [PluralQuantity, setPluralQuantity] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const HandlerCounter = (counter) => {
      setQuantity(counter)
      if(counter > 1){
        setPluralQuantity(true)
      }
      else{
        setPluralQuantity(false)
      }
  }

  const addProductToCart = () => {
      addProduct(detail,quantity)
  }
   console.log(detail)

         if(!detail){
           console.log("No hay nada")
         return <UnexistentProduct/>
        }
        else{
          return <div className="detail-container" key={detail.id}>
          <article className="item-detail">
             <div className="item-detail-left-side">
              <Link to={`/imagenes/` + detail.iD}> <img src={detail.image}/></Link>
                 <h1>{detail.product}</h1>   
             </div>
            <div className="item-detail-right-side">
             <div className="price-description-section">
               <h5>Precio: ${detail.price}</h5>
               <p><strong>Descripción:</strong> <br/> {detail.description}</p>
             </div>
              <div>
                <ItemCount min={1} max={detail.stock} initial={1} onChange={HandlerCounter}/> 
                <br style={{height:"10px"}}/>
                <span className="items-to-buy">Vas a comprar {quantity} prenda{
                  PluralQuantity === true ? "s" : ""
                }
                </span>
              </div>
            <div className="add-to-cart-div">
            <Link to="/carrito" onClick={addProductToCart} className="button secondary">Añadir al carrito</Link>
            </div>
            </div>
         </article>
     </div>
        }
       

}