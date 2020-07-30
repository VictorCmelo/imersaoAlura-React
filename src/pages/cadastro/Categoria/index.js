import React, { useState } from 'react'
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {

  const valoresIniciais = { 
    nome: '',
    descricao: '',
    cor: '',
  }

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function handleSetValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    })
  }

  
  function handleSubmit(event) {
    event.preventDefault();

    setCategorias([...categorias, values]);
    setValues(valoresIniciais);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={(event) => handleSubmit(event)} style={{alignContent: 'center'}}>
      
      <FormField  
        label="Nome da Categoria"
        value={values.nome}
        onChange={(event) => handleSetValue(event.target.getAttribute('name'), event.target.value)}
        name="nome"
        placeholder="Nome da Categoria"
        />
 
        <FormField 
        label="Descrição" 
        value={values.descricao}
        onChange={(event) => handleSetValue(event.target.getAttribute('name'), event.target.value)}
        nome="descricao"
        type="textarea"
        placeholder="Descrição"
        />

        <FormField 
        label="Cor" 
        value={values.cor}
        onChange={(event) => handleSetValue(event.target.getAttribute('name'), event.target.value)}
        type="color"
        name="cor"
        placeholder="cor"
        /> 

   
      <div style={{marginTop: '50px', width:'80%', display: 'flex', alignItems: 'space-between', justifyContent: 'space-between' }}>
      

        <Link to="/">
        Voltar para Home
      </Link>

      <Button >
          Cadastrar
        </Button>
      </div>
       
      </form>

      <ul>
        {categorias.map((categoria, index) => {
          return (
            <li key={index}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

    
    </PageDefault>
  )
}

export default CadastroCategoria;