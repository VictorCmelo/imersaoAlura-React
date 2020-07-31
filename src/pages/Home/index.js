import React, { useEffect, useState } from 'react';

import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriasRepository from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';
import Spinner from '../../components/Spinner';

function Home() {

  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
   
      categoriasRepository.getAllWithVideos()
      .then((categoriasComVideo) => {
        setDadosIniciais(categoriasComVideo);
      }).catch((err) => {
        console.log(err.message)
      })
    

  }, [])


  return (


    <PageDefault paddingAll={0} >

      {dadosIniciais.length === 0 && (<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop:'11rem', flexDirection: 'column'}}>
        <Spinner />
       <h1>Loading...</h1></div>
      )}

        {dadosIniciais.map((categoria, index) => {
          if(index === 0){
            return (
              <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={"Victor Costa Melo explicou sobre 'A primeira viagem a bordo do container: automatize seus testes com Selenium e Docker' entenda o que é, pra que serve e como utilizar Docker na automação de testes com Selenium WebDriver."}
              />
    
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
            )
          }

          return (
            <Carousel
            key={categoria.id}
            category={categoria}
          />
          )

        })}

    
    </PageDefault>
   
  );
}

export default Home;
