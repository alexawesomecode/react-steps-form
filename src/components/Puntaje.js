import React from "react";
import { calculaPuntaje } from "../helpers/formula";

class Puntaje extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  
  componentDidMount() {
    const puntos = calculaPuntaje(this.props.values);
    this.setState({puntaje: puntos})

    
  }
  render() {
    const { values } = this.props;
    return (
      <div className="container">
        <div className="row">
        <h1 className=""> Resultado: </h1>
        </div>
        <div className="row bg-danger">
        <h2>Puntaje: {this.state.puntaje}</h2>
        </div>
        <div className="row bg-success">
        <h2>Uno</h2>
        </div>
        <div className="row bg-info">
        <h2>Dos</h2>
        </div>
        <div className="row bg-warnin">
        <h2>Tres</h2>
        </div>
        <div className="row mt-3">
           JSON: {JSON.stringify(values)}
          </div>


      </div>
     
    );
  }
}
export default Puntaje;