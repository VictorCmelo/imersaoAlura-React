import React, { useEffect, useState } from 'react'
import PageDefault from '../../../components/PageDefault';
import { Link, useHistory } from 'react-router-dom';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {

        setCategorias(categoriasFromServer);
      })
  }, [])


  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const categoriaEscolhida = categorias.find((categoria) => {
          return categoria.titulo === values.categoria;
        });

        console.log(categoriaEscolhida);
        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id
        }).then(() => {
          console.log('cadastro com sucesso ! ');
          history.push('/')
        })

      }}>

        <FormField
          label="Titulo do Video"
          value={values.titulo}
          onChange={handleChange}
          name="titulo"
          placeholder="Titulo do Video"
          required={true}
        />

        <FormField
          label="URL"
          value={values.url}
          onChange={handleChange}
          name="url"
          placeholder="URL"
          required={true}
        />

        <FormField
          label="Categoria"
          value={values.categoria}
          onChange={handleChange}
          name="categoria"
          placeholder="Categoria"
          required={true}
          suggestions={categoryTitles}
        />

        <div style={{ marginTop: '50px', width: '90%', display: 'flex', alignItems: 'space-between', justifyContent: 'space-between' }}>


          <Button type="submit">
            Cadastrar
      </Button>

          <Link to="/cadastro/categoria">
            Cadastrar Categoria
      </Link>
        </div>
      </form>

    </PageDefault>
  )
}

export default CadastroVideo;