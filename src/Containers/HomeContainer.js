import React, { useState, useEffect } from "react";
import ItemList from "../components/ItemScreen/ItemList"
import LoadingContainer from "../components/Loading/LoadingContainer";
import {getFirestore} from "../firebase"


export default function Home() {
  const [products, setProducts] = useState([])


  useEffect(() => {
    const db = getFirestore();
    const ItemCollection = db.collection("json-oficial")
    // const idItem = itemCollection.doc("nqYxwipNG16h9ScPXBvo");
 // Pedimos los datos
 ItemCollection.get().then((response) => {
  // console.log(response.data())
 const ProductDatabase = response.docs.map(element => {
  const id = element.id;
  return {...element.data(), id:id};
 });
  
 // Guardamos los datos en estado
 setProducts(ProductDatabase);
  
 });
  },[])
 
 

  return (
    <div>
       {
  products.length === 0 ? (
    <LoadingContainer/>
  ) : (
     <ItemList products={products}/>
  )
} 
    </div>
    
  );
}
