import { URL_BACKEND } from '../config';

const URL_CATEGORIES = `${URL_BACKEND}/categorias`;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (respostaDoServer) => {
      if (respostaDoServer.ok) {
        return  await respostaDoServer.json();

      }
      throw new Error('Não foi possível pegar os dados');
    })

}

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (respostaDoServer) => {
      if (respostaDoServer.ok) {
        return  await respostaDoServer.json();

      }
      throw new Error('Não foi possível pegar os dados');
    })

}

export default {
  getAllWithVideos,
  getAll,
}