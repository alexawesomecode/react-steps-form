import React from 'react';
import '../index.css';


export class Two extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="container-fluid">
      <div className="row flex font-weight-bold pt-3 text-left col-md-12">  
            <p className=""> El aumento de temperatura del planeta se debe a las emisiones de gases de efecto invernadero asociadas a todas las actividades humanas. Todas nuestas decisiones de consumo, como qué alimentos elegir, qué transporte usar, qué ropa vestir, etc., contribuyen al cambio climático. Por ello es importante saber la huella de carbono de cada una para elegir aquellas opciones que sean más ecológicas.

¿CÓMO CONTRIBUYEN NUESTRAS ACCIONES DIARIAS AL CAMBIO CLIMÁTICO?

Esta calculadora de emisiones puede darte una idea y ayudarte a tomar mejores decisiones de consumo que impacten menos a nuestro planeta.</p>
            <div className=""><a href="" onClick={this.continue} class="button button2 link-light">
            Continuar
             </a></div>
             
        </div>
      </div>  
    );
  }
}

export default Two;
