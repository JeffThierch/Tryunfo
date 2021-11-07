import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
      hasTrunfo,
    } = this.props;
    return (
      <form className="card-form-container">
        <Input
          label="Nome"
          name="cardName"
          type="text"
          test="name-input"
          placeholder="Insira o nome da carta"
          value={ cardName }
          onChange={ onInputChange }
        />
        <label htmlFor="cardDescription">
          Descricao
          <textarea
            data-testid="description-input"
            id="cardDescription"
            name="cardDescription"
            placeholder="Insira a descricao da carta"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <Input
          label="Ataque"
          name="cardAttr1"
          type="number"
          test="attr1-input"
          placeholder="Insira o ataque "
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
        <Input
          label="Defesa"
          name="cardAttr2"
          type="number"
          test="attr2-input"
          placeholder="Insira a defesa"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
        <Input
          label="Mana"
          name="cardAttr3"
          type="number"
          test="attr3-input"
          placeholder="Insira a mana"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
        <Input
          label="Imagem"
          name="cardImage"
          type="text"
          test="image-input"
          placeholder="insira a URL da imagem"
          value={ cardImage }
          onChange={ onInputChange }
        />
        <label htmlFor="cardRare">
          Raridade
          <select
            data-testid="rare-input"
            id="cardRare"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal" defaultValue>
              Normal
            </option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        {
          hasTrunfo ? 'Você já tem um Super Trunfo em seu baralho' : (
            <label htmlFor="cardTrunfo">
              <input
                type="checkbox"
                id="cardTrunfo"
                name="cardTrunfo"
                data-testid="trunfo-input"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
              Super Trunfo
            </label>
          )

        }

        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
