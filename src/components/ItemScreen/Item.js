import {Link} from "react-router-dom"
import { useContext } from "react";
import AppContext from "../../Context/useAppContext";

export default function Item({product}){    



    return(
        <>
        <article className="item-container">
            <img src={product.image}/> 
            <h2>{product.product}</h2>
            <h4>Precio: ${product.price}</h4>
            <Link to={`/SCS-Store/productos/` + product.category + "/" + product.iD} className="button primary">Comprar</Link>
        </article>
        </>
    )
}