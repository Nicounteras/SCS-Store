import './App.css';
import React, {useEffect, useState} from "react"
import NavBar from "./components/NavBar"
import Home from "./Containers/HomeContainer"
import ItemDetailContainer from "./components/ItemScreen/ItemDetailContainer"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import {AppProvider} from './Context/useAppContext';

import Cart from "./components/Cart/Cart"
import CategoryContainer from './Containers/CategoriesContainer';
import { getFirestore } from './firebase';
import ImageContainer from './components/image/imageContainer';

const NotFoundPage = () => {
  return <div className="no-items-div">
  <p>La URL que introdujiste es inválida.</p>
  <Link to="/" className="button primary">Volver al inicio</Link>
</div>
} 

function App() {
  const [text, setText] = useState()
  const [producto, setProducto] = useState([]) // Declaras el state del producto (conjunto de arrays)
  const [carrito, setCarrito] = useState([]) // Declaras el state del carrito (conjunto de arrays)
  
  useEffect(() => {
    const db = getFirestore(); // Llamas a firestore
   db.collection("json-oficial") // Llamas a la colección
   .get() // Tomas
   .then((response) => {
     if (response.size)   { //en caso la colección exista
       let aux = response.docs.map((elemento) => {  //mapeas todos los productos
         const id = elemento.id; // llamas el id default de firebase
         return {...elemento.data(), id:id} // estableces que aux devuelve toda la data de nuestra colección y tomas el ID generados por firebase
       })
       setProducto(aux)// impones que el state del producto ahora vendría a ser toda la data de la colección (además, con los ID generados por firebase). 
     }
   })
   console.log(producto)
 },[]);
  
  return (
   
   <AppProvider>
  <Router>
   <NavBar/>
    <Switch>
      <Route path="/productos/:category/:iD" component={ItemDetailContainer}/>
      <Route path="/" exact component={Home}/>
      <Route path="/imagenes/:iD" exact component={ImageContainer}/>
      <Route path="/categoria/:cat" exact component={CategoryContainer}/>
      <Route path="/carrito" exact component={Cart}/>
      <Route component={NotFoundPage} />
      </Switch>
      </Router>
  </AppProvider> 
  );
 }
 
 
 


export default App;
