import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import Icon from "../Icon"
import useAppContext from "../Context/useAppContext";

const CartIcon = () => {

  const {productsCount} = useAppContext()
  return <span className="cart-icon"><Icon iconName="fas fa-shopping-cart"/> ({productsCount()})</span>
}

function NavBar() {
  const [ToggleNav, setToggleNav] = useState(false)
  const OpenNav = () => {
    setToggleNav(!ToggleNav)
  }

   return (
  <nav id="target">
    <Link to="/" className="computer-logo">
    <h1>
         Shaka Cool Stuff
     </h1>
    </Link>
    {/* Toggle logo */}
    <Link to="/" className="toggle-logo">
      <h1>SCS</h1>
    </Link>
    <Link to="/">
    <Icon iconName="far fa-hand-peace main-icon"/>
    </Link>
     <div>
       <Link to="/categoria/camisetas">Camisetas</Link>
       <Link to="/categoria/bucket-hats">Bucket hats</Link>
       <Link to="/carrito">Carrito <CartIcon/></Link>
     </div>
       <button className="nav-icon" onClick={OpenNav}>
       &#9776;
       </button> 
     <aside className={ToggleNav === true ? "visible" : "not-visible"}>
     <Link className="button secondary" to="/categoria/camisetas">Camisetas</Link>
     <Link className="button secondary" to="/categoria/bucket-hats">Bucket hats</Link>
       <Link className="button secondary" to="/carrito">Carrito <CartIcon/></Link>
     </aside>
   </nav>
  );
}

export default NavBar;
