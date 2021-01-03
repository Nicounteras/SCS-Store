 
import { Link, useParams } from "react-router-dom"
import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail"
import LoadingContainer from "../Loading/LoadingContainer";
import {getFirestore} from "../../firebase"
 
const ItemDetailContainer = () => {
 const [loading, setLoading] = useState(true)
 const [det, setDet] = useState({})
 const [products, setProducts] = useState([])
 
 const { iD, category } = useParams()
 
 
 
useEffect(async () => {
  const db = getFirestore();
  const ItemCollection = db.collection("json-oficial")
  const AvailableItems = ItemCollection.where("available", "==", true);
  // const iDItem = itemCollection.doc("nqYxwipNG16h9ScPXBvo");
// Pedimos los datos
AvailableItems.get().then((response) => {
// console.log(response.data())
if(response.size){
  let ProductDatabase = response.docs.map(element => {
    const id = element.id;
    return {...element.data(), id:id};
    });
    setProducts(ProductDatabase);
ProductDatabase.forEach((detail) => {
 if (detail.iD == iD) {
   setLoading(false)
   setDet(detail)
 }
 else{
   setLoading(false)

 }
})
}

// Guardamos los datos en estado

});
}, [iD, category])
 
 
 
   return <>{loading ? <LoadingContainer/> : <ItemDetail detail={det}/>}</>
 
}
 
export default ItemDetailContainer
