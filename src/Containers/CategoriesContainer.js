import React, { useState, useEffect } from "react";
import ItemList from "../components/ItemScreen/ItemList"
import LoadingContainer from "../components/Loading/LoadingContainer";
import {getFirestore} from "../firebase"
import { useParams } from "react-router-dom";


export default function CategoryContainer() {
  const [products, setProducts] = useState([])

  const {cat} = useParams()


  useEffect(() => {
    const db = getFirestore();
    const ItemCollection = db.collection("json-oficial")
    const CamisetasItems = ItemCollection.where("category", "==", `${cat}`)
    // const idItem = itemCollection.doc("nqYxwipNG16h9ScPXBvo");
 // Pedimos los datos
 CamisetasItems.get().then((response) => {
  // console.log(response.data())
 const ProductDatabase = response.docs.map(element => {
  const id = element.id;
  return {...element.data(), id:id};
 });
  
 // Guardamos los datos en estado
 setProducts(ProductDatabase);
 console.log(products)
  
 });
  },[cat])
 
 

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
