import useAppContext from "../../Context/useAppContext"
import validate from "./ValidateForm"
import { Link } from "react-router-dom"
import {useState, useEffect} from "react"
import useCartForm from './UseCartForm';
import LoadingContainer from "../Loading/LoadingContainer"
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Icon from "../../Icon"
import { getFirebase, getFirestore } from "../../firebase";

const CartForm = ({submitForm}) => {
  const {products, priceCount, name, email, phone, setName, setEmail, setPhone, setEmailValidation} = useAppContext()
    const { handleChange, values, errors, setErrors } = useCartForm(
	    submitForm,
	    validate
      );
      const [submitError, setSubmitError] = useState(false);

      const submitTheForm = () => {
        if (Object.keys(errors).length === 0){
            handleSubmit()
            console.log("No hay errores")
        }
        else{
          setSubmitError(true)
          console.log("Hay")
        }
      }

      const handleSubmit = e => {
          console.log(name)
        const db = getFirestore()
        db.collection("ventas")
          .add({ name: name,
            email: email,
            phone: phone, items: products, total: priceCount()})
          .then(({id}) => {
           alert(id)
          })
          .catch(() => {
            alert("Tu compra no se efectuó con éxito, te pedimos intentar de nuevo");
          });
          setErrors(validate(values));
          setEmailValidation("")
          setEmail("")
          setName("")
          setPhone("")
      }

   return (
      <div>
         {
           submitError ? 
             <div>Hubo un error</div>
           : <form noValidate>
           <p>Para poder realizar la compra, te pedimos rellenar este formulario.</p>
    <div className="container">
    <li>
       <label>Tu nombre</label>
           <input placeholder="Escribe tu nombre aquí"  name="name" autoComplete="off" value={values.name} onChange={handleChange}  />
           {errors.name &&  <span>{errors.name} </span>}
       </li>
       <li>
           <label>Tu e-mail</label>
           <input placeholder="Coloca tu e-mail aquí" name="email" autoComplete="off" onChange={handleChange} value={values.email}/>
           {errors.email &&  <span>{errors.email} </span>}
       </li>
       <li>
           <label>Confirma tu e-mail</label>
           <input placeholder="Reescribe tu e-mail" name="emailValidation" value={values.emailValidation} autoComplete="off" onChange={handleChange}/>
           {errors.emailValidation &&  <span>{errors.emailValidation} </span>}
       </li>
     {/*   <li>
           <label>Tu número telefónico</label>
       <div className="telephone-area">
           <code>+51 🇵🇪</code>
       <input value={values.phone} autoComplete="off" onChange={handleChange} placeholder="Coloca tu número de teléfono"/>
       
       </div>
       {errors.phone &&  <span>{errors.phone}</span>}
       </li> */}
   <li>
       <button onClick={submitTheForm} className="button primary margin-20-top">Realizar compra</button>
   </li>
    </div>
     <p>O también puedes entrar en contacto con nosotros por medio de Instagram o enviándo un mensaje de WhatsApp al +51 949-161-510.</p>
   </form>
         }
      </div>
   )
}

export default CartForm