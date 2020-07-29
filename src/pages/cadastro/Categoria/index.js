import React, { useState } from 'react'
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

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

      <form onSubmit={(event) => handleSubmit(event)}>
      
      <FormField  
        label="Nome da Categoria"
        value={values.nome}
        onChange={(event) => handleSetValue(event.target.getAttribute('name'), event.target.value)}
        name="nome"
        />

        <FormField 
        label="Descrição" 
        value={values.descricao}
        onChange={(event) => handleSetValue(event.target.getAttribute('name'), event.target.value)}
        nome="descricao"
        type="textarea"
        />

        <FormField 
        label="Cor" 
        value={values.cor}
        onChange={(event) => handleSetValue(event.target.getAttribute('name'), event.target.value)}
        type="color"
        name="cor"
        />

        {/* <div>
          <label>
            Descrição:
              <textarea
                type="text"
                name="descricao"
                value={values.descricao}
                onChange={(event) => handleSetValue(event.target.getAttribute('name'), event.target.value)}
              />
          </label>
        </div>

       

        <div>
          <label>
            Cor:
              <input
                type="color"
                name="cor"
                value={values.cor}
                onChange={(event) => handleSetValue(event.target.getAttribute('name'), event.target.value)}
              />
          </label>
        </div> */}


        <button>
          Cadastrar
        </button>
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

      <Link to="/">
        Voltar para Home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;