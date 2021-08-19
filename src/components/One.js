import React from 'react';
import '../index.css';


export class One extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    //const { values, handleChange } = this.props;
    return (
      <div className="container-fluid">
      <div className="row col-md-12"> 
            <h1>Vamos a calcular tus emisiones </h1>
            <p>Haz el test y descubre cuál es tu huella de carbono según tus hábitos de consumo.</p>

      <div className="row col-md-2 ">
        
      <a href="" onClick={this.continue} class="button button2 link-light">
            Comenzar
             </a>
             
             </div>      
      </div>
          
           
      
      </div>
    );
  }
}

export default One;
