import React from "react";

class Vuelos extends React.Component {
     continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
    
      back = e => {
        e.preventDefault();
        this.props.prevStep();
      };

  render() {
    const { values, handleChange } = this.props;

    return (
      <div>
        <h1 class="pregunta-titulo"> 3. Con que frecuencia viajas en avion? </h1>
      <div onChange={handleChange('viajes')}>
      <ul class="seleccion-lista">
     <li>        <input type="radio" value="viajeFrecuente" name="viajeroFrecuente" checked={values.viajes == 'viajeroFrecuente'}/> Viajero frecuente, 10 veces al mes y  VIP.
</li>
<li>        <input type="radio" value="unVuelo" name="unVuelo" checked={values.viajes == 'unVuelo'}/> Aproximadamente un vuelo
</li>
<li>        <input type="radio" value="masDeUnVuelo" name="masDeUnVuelo" checked={values.viajes == 'masDeUnvuelo'}/> Más de un vuelo (ida y vuelta) nacional 
</li>
<li>        <input type="radio" value="caballo" name="caballo" checked={values.viajes == 'caballo'}/> Otro. Viajo a caballo.
</li>
</ul>
        </div>
        <div class="barra-botones">

        <a href="" onClick={this.back} class="button button2">
            Devolver
             </a>
             <a href="" onClick={this.continue} class="button button2">
            Continuar
             </a>
             </div>
      </div>
    );
  }
}
export default Vuelos;