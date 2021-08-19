import React, { Component } from 'react';
export class Email extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const  {values} = this.props;
    return (

      <div>

        <p>Es el último paso! Queremos saber quién eres, esto nos ayudará a ampliar tus resultados ... tus hábitos de consumo y proteger el medio ambiente. ¡Súmate!</p>
        <form clasName="">
        <div className="form-group">
        <label for="exampleInputEmail1" /> Nombre
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="form-group">
        <label for="apellidos" /> Apellidos
        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>


        <div className="form-group">
        <label for="exampleInputEmail1" /> Email address
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        
        <div className="form-group">
        <label for="exampleInputEmail1" /> Telefono
        <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
       
        </form>
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

export default Email;
