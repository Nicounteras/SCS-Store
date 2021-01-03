import { useState, useEffect } from 'react';
import useAppContext from "../../Context/useAppContext"
import { getFirebase, getFirestore } from "../../firebase";

const useCartForm = (callback, validate, fn) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    emailValidation: '',
    phone: ''
  });
  const {products, priceCount, name, email, phone, setName, setEmail, setPhone, setEmailValidation} = useAppContext()
  const [errors, setErrors] = useState({});

  const handleChange = e => {
   
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  return { handleChange, values, errors, setErrors, callback };
};

export default useCartForm;