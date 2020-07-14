import React, { Component } from 'react';
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado';

class App extends Component{

  state = {
    termino : '',
    Imagenes : []
  }
  consultarApi = () => {
   const url = "https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${this.state.termino}";

   fetch(url)
   .then(respuesta => respuesta.json())
   .then(resultado => this.setState({imagenes : resultado.hits}))
  }
  datosBusqueda = (termino) => {
    this.setState({termino},()=>{this.consultarApi();})
    
  }
  render(){
    return(
      <div className="app container">
        <div className="jumbotron">
          <p  className="lead text-center">Buscador de imagenes</p>
          <Buscador
          datosBusqueda={this.datosBusqueda}/>
        </div>
        <Resultado
        imagenes={this.state.imagenes} />
      </div>
      
    )
  }
}
export default App;
