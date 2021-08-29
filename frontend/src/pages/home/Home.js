import React from 'react'
import Navbar from '../../componentes/navbar/navbar'
import './home.css';

import Gama from './logos/Gama.png'
import AmbevTech from './logos/AmbevTech.png'




function Home() {
  return (
    <div>
        <div>
        <Navbar />
        </div>
        <h4>Bem vinde! </h4>
        <h5>Projeto desenvolvido no Programa Start Tech!</h5>
        <h5> Empresas parceiras:</h5>
        
        <div className="imagens">
        <img src={Gama} alt="Log Gama Acaemy" className="imag-Gama" />
        <img src={AmbevTech} alt="Logo AmbevTech" className="img-AmbevTech" />
        </div>
        
        <p> </p>
    </div>

  );
}

export default Home;


