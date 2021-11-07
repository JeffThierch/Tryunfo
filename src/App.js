import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,

    };
    this.onInputChange = this.onInputChange.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  handleErrors() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare } = this.state;

    const maxCardAtribute = 90;
    const minCardAtribute = 0;
    const cardAtts = [cardAttr1, cardAttr2, cardAttr3];
    const verifyCardAtts = cardAtts.map((att) => (
      Number(att) <= maxCardAtribute && Number(att) >= minCardAtribute
    ));
    const verifyMaxPoints = cardAtts.reduce((acc, curr) => acc + Number(curr), 0);
    const maxPoints = 210;

    const errorCases = [
      !cardName.length,
      !cardDescription.length,
      !cardImage.length,
      !cardRare.length,
      verifyCardAtts.includes(false),
      verifyMaxPoints > maxPoints,
    ];
    const completedForm = errorCases.every((error) => error !== true);

    this.setState({
      isSaveButtonDisabled: !completedForm,
    });
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => { this.handleErrors(); });
  }

  onSaveButtonClick() {
    return null;
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, isSaveButtonDisabled } = this.state;
    return (
      <>
        <header>
          <h1>Tryunfo</h1>

        </header>
        <main className="main-container">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </main>
      </>
    );
  }
}

export default App;
