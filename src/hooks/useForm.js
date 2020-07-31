import { useState } from 'react';

 function useForm(valoresIniciais){
  const [values, setValues] = useState(valoresIniciais);
  
  function handleSetValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    })
  }

  function handleChange(event) {
    handleSetValue(
      event.target.getAttribute('name'),
      event.target.value
    );
  }

  function clearForm(){
    setValues(valoresIniciais);
  }

  return {
    handleChange,
    values,
    clearForm,
  }
}

export default useForm;