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

  function handleChange(event) {
    handleSetValue(
      event.target.getAttribute('name'),
      event.target.value
    );
  }

  function handleSubmit(event) {
    event.preventDefault();

    setCategorias([
      ...categorias,
      values
    ]);



    setValues(valoresIniciais);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <div style={{ display: 'flex', alignItems: 'space-between', justifyContent: 'space-between'}}>
        <form onSubmit={(event) => handleSubmit(event)} style={{ alignContent: 'center', flex: '1' }}>

          <FormField
            label="Nome da Categoria"
            value={values.nome}
            onChange={handleChange}
            name="nome"
            placeholder="Nome da Categoria"
            required={true}
          />

          <FormField
            label="Descrição"
            value={values.descricao}
            name="descricao"
            type="text"
            placeholder="Descrição"
            onChange={handleChange}
            required={true}
          />

          <FormField
            label="Cor"
            value={values.cor}
            type="color"
            name="cor"
            placeholder="cor"
            onChange={handleChange}
            required={true}
          />


          <div style={{ marginTop: '50px', width: '90%', display: 'flex', alignItems: 'space-between', justifyContent: 'space-between' }}>


            <Link to="/">
              Voltar para Home
      </Link>

            <Button >
              Cadastrar
        </Button>
          </div>

        </form>

        <table style={{ marginTop: "20px" }} width="50%" border="1px">
          <tr>
            <th style={{ width: '30%' }}>Nome</th>
            <th style={{ width: '50%' }}>Descrição</th>
            <th style={{ width: '20%' }}>Cor</th>
          </tr>
          {categorias.map((categoria, index) => {
            return (
              <tr key={index}>
                <td>{categoria.nome}</td>
                <td>{categoria.descricao}</td>
                <td>{categoria.cor}</td>
              </tr>
            )
          })}
        </table>
      </div>

    </PageDefault>
  )
}

export default CadastroCategoria;