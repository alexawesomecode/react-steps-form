import React, { Component } from 'react';
import Email from './Email';
import One from './One';
import Two from './Two';
import Energia from './Energia';
import Focos from './Focos';
import Vuelos from './Vuelos';
import Puntaje from './Puntaje';



export class Inicio extends Component {
  state = {
    step: 1,
    vuelos: '',
    electrodomesticos: {},
    focos: '',
    energia: 'gasnatural'
  };
  

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    console.log(this.state);

    this.setState({ [input]: e.target.value });
  };



  render() {
    const { step } = this.state;
   // const { firstName, lastName, email, occupation, city, bio, primero, segundo, energia} = this.state;
   // const values = { firstName, lastName, email, occupation, city, bio, primero, segundo, energia };

    switch (step) {
      case 1:
        return (
          <One
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={this.state}
          />
        );
      case 2:
        return (
          <Two
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={this.state}
          />
        );
      case 3:
        return (
          <Energia
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={this.state}
          />
        );
        case 4:
        return (
          <Focos
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={this.state}
          />
        );
        case 5:
          return (
            <Vuelos
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={this.state}
            />
          );
      case 6:
        return <Email 
                 prevStep={this.prevStep}
               nextStep={this.nextStep}
                values={this.state}/>;
      case 7:
        return <Puntaje 
                values={this.state}/>;
      default:
        (console.log('alexwashere'))
    }
  }
}

export default Inicio;
