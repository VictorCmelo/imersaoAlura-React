import React, { useState, useEffect } from 'react'
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';



function CadastroCategoria() {

  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  }

  const {values, handleChange, clearForm} = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);
  

  

  function handleSubmit(event) {
    event.preventDefault();

    setCategorias([
      ...categorias,
      values
    ]);

    clearForm(valoresIniciais);
  }

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
    ? 'http://localhost:8080/categorias'
    : 'https://server-tholaflix.herokuapp.com/categorias';
       
      fetch(URL)
       .then(async (respostaDoServer) =>{
        if(respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setCategorias(resposta);
          return; 
        }
        throw new Error('Não foi possível pegar os dados');
       })
       
  }, [])


 

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.titulo}</h1>

      <div style={{ display: 'flex', alignItems: 'space-between', justifyContent: 'space-between'}}>
        <form onSubmit={(event) => handleSubmit(event)} style={{ alignContent: 'center', flex: '1' }}>

          <FormField
            label="titulo da Categoria"
            value={values.titulo}
            onChange={handleChange}
            name="titulo"
            placeholder="titulo da Categoria"
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
            <th style={{ width: '30%' }}>titulo</th>
            <th style={{ width: '50%' }}>Descrição</th>
            <th style={{ width: '20%' }}>Cor</th>
          </tr>
          {categorias.map((categoria, index) => {
            return (
              <tr key={index}>
                <td>{categoria.titulo}</td>
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