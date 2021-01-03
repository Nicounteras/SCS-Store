import Item from "./Item"
import { Link } from "react-router-dom"


export default function ItemList ({products}){
    return(
        <div className="items-home">
      {products ? products.map(product => {
        return <Item product={product} key={product.id} />
      }): ""}
    </div>
    )
}