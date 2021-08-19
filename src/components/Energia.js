import React from "react";

class Energia extends React.Component {

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
      <div class="center">
        <h1 class="pregunta-titulo"> 1. En mi domicilio utlizo... </h1>
      <div class="seleccion-multiple" onChange={handleChange('energia')}>
      <ul class="seleccion-lista">
     <li><input type="radio" value="gasnatural" name="gasnatural" checked={values.energia == 'gasnatural'}/> Gas Natural
       </li>  
       <li><input type="radio" value="gaslp" name="gaslp" checked={values.energia == 'gaslp'}/> Gas LP
      </li>   
      <li><input type="radio" value="carbon" name="carbon" checked={values.energia == 'carbon'}/> Carbon
       </li>  
       <li><input type="radio" value="plutonio" name="plutonio" checked={values.energia == 'plutonio'}/> Plutonio
         </li>
        </ul>
      
      </div>
      <div class="barra-botones">
      <a href="" onClick={this.back} class="button button2">
            Devolver
             </a>
             <a href="" onClick={this.continue} class="button button2 link-light">
            Continuar
             </a>
             </div>
      </div>
    );
  }
}
export default Energia;