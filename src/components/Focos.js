import React  from 'react';

class Focos extends React.Component {
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
        <h1 class='pregunta-titulo'> 2. En mi casa los focos son... </h1>
      <div onChange={handleChange('focos')}>
      <ul class='seleccion-lista'>
     <li><input type='radio' value='led' name='led' checked={values.focos == 'led'}/> Led
      </li>
      <li>        <input type='radio' value='ahorradores' name='ahorradores' checked={values.focos == 'ahorradores'}/> Ahorradores
</li>
        <li>        <input type='radio' value='incandescentes' name='incandescentes' checked={values.focos == 'incandescentes'}/> Incandescentes
</li><li>        <input type='radio' value='velas' name='velas' checked={values.focos == 'velas'}/> Uso velas.
</li>
</ul>
        </div>
        <div class='barra-botones'>

        <a href='' onClick={this.back} class='button button2'>
            Devolver
             </a>
             <a href='' onClick={this.continue} class='button button2 link-light'>
            Continuar
             </a>
             </div>
      </div>
    );
  }
}
export default Focos;