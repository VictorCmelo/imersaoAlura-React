import { URL_BACKEND } from '../config';

const URL_VIDEOS = `${URL_BACKEND}/videos`;

function create(objetoDoVideo) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDoVideo),
  })
    .then(async (respostaDoServer) => {
      if (respostaDoServer.ok) {
        return  await respostaDoServer.json();

      }
      throw new Error('Não foi possível cadastrar os dados');
    })

}

export default {
  create,
}