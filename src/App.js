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
      savedCards: [],
      hasTrunfo: false,
      filterName: 'all',
      filterRare: 'todas',
      filterTrunfo: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
    this.clearInputs = this.clearInputs.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.verifySuperTrunfo = this.verifySuperTrunfo.bind(this);
    this.removeCard = this.removeCard.bind(this);
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
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo } = this.state;
    this.setState((prevState) => ({
      savedCards: [...prevState.savedCards,
        { cardName,
          cardDescription,
          cardAttr1,
          cardAttr2,
          cardAttr3,
          cardImage,
          cardRare,
          cardTrunfo },
      ],
    }), () => this.setState({ hasTrunfo: this.verifySuperTrunfo() }));
    this.clearInputs();
  }

  clearInputs() {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });
  }

  verifySuperTrunfo() {
    const { savedCards } = this.state;

    return savedCards.some(({ cardTrunfo }) => cardTrunfo);
  }

  removeCard({ target: { name } }) {
    const { savedCards } = this.state;
    this.setState({
      savedCards: savedCards.filter(({ cardName }) => (
        cardName !== name
      )),
    }, () => this.setState({ hasTrunfo: this.verifySuperTrunfo() }));
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, isSaveButtonDisabled,
      hasTrunfo, savedCards, filterName, filterRare, filterTrunfo } = this.state;

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
            hasTrunfo={ hasTrunfo }
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
            isCardPreview={ false }
            removeCard={ this.removeCard }
          />
        </main>
        <section className="cards-container">
          <div className="filters-container">
            <input
              type="text"
              name="filterName"
              data-testid="name-filter"
              placeholder="Nome da carta"
              onChange={ this.onInputChange }
              disabled={ filterTrunfo }
            />
            <select
              name="filterRare"
              onChange={ this.onInputChange }
              data-testid="rare-filter"
              disabled={ filterTrunfo }
            >
              <option>todas</option>
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
            <label htmlFor="filterTrunfo">
              <input
                type="checkbox"
                name="filterTrunfo"
                id="filterTrunfo"
                data-testid="trunfo-filter"
                onChange={ this.onInputChange }
              />
              Super Trunfo
            </label>
          </div>
          {savedCards.filter((card) => {
            if (filterName === 'all' && filterRare === 'todas'
            && filterTrunfo === false) {
              return true;
            }
            return (card.cardName.includes(filterName)
            || filterRare === card.cardRare
            || filterTrunfo === card.cardTrunfo);
          }).map((card, index) => (
            <Card
              key={ index }
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
              isCardPreview
              removeCard={ this.removeCard }
            />
          ))}
        </section>
      </>
    );
  }
}

export default App;
