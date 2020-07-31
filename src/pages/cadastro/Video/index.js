import React from 'react'
import PageDefault from '../../../components/PageDefault';
import { Link, useHistory } from 'react-router-dom';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';

function CadastroVideo() {
  const history = useHistory();
  const { handleChange, values } = useForm({
    titulo: 'Video Padrão',
    url: 'https://www.youtube.com/watch?v=DeQk9KXg4Co',
    categoria: 'Front End',
  });

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: 1,
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
          name="titulo"
          placeholder="Titulo do Video"
          required={true}
        />

        <FormField
          label="Categoria"
          value={values.categoria}
          onChange={handleChange}
          name="titulo"
          placeholder="Titulo do Video"
          required={true}
        />


        <Button type="submit">
          Cadastrar
      </Button>
      </form>
      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  )
}

export default CadastroVideo;