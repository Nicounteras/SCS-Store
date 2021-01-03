export default function validate(values) {
    let errors = {};
  
    if (!values.name.trim()) {
      errors.name = 'El nombre de usuario es requerido';
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  
    if (!values.email) {
      errors.email = 'El e-mail es requerido';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Coloca una dirección válida de e-mail';
    }
    if (!values.telephone) {
      errors.telephone = 'El teléfono es requerido';
    } else if (values.telephone.length < 9) {
      errors.telephone = 'El teléfono debe tener 9 dígitos (móvil)';
    } else if(!values.telephone.num()){
        errors.telephone = "El número de teléfono es inválido"
    }
  
    if (!values.emailValidation) {
      errors.emailValidation = 'Este campo es requerido';
    } else if (values.emailValidation !== values.email) {
      errors.emailValidation = 'Los e-mail no coinciden';
    }
    return errors;
  }