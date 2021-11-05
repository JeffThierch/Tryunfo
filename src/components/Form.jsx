import React, { Component } from 'react';
import Input from './Input';

class Form extends Component {
  render() {
    return (
      <form className="card-form-container">
        <Input
          label="Nome"
          name="cardName"
          type="text"
          test="name-input"
          placeholder="Insira o nome da carta"
        />
        <label htmlFor="cardDescription">
          Descricao
          <textarea
            data-testid="description-input"
            id="cardDescription"
            name="cardDescription"
            placeholder="Insira a descricao da carta"
          />
        </label>
        <Input
          label="Ataque"
          name="cardAttr1"
          type="number"
          test="attr1-input"
          placeholder="Insira o ataque "
        />
        <Input
          label="Defesa"
          name="cardAttr2"
          type="number"
          test="attr2-input"
          placeholder="Insira a defesa"
        />
        <Input
          label="Mana"
          name="cardAttr3"
          type="number"
          test="attr3-input"
          placeholder="Insira a mana"
        />
        <Input
          label="Imagem"
          name="cardImage"
          type="text"
          test="image-input"
          placeholder="insira a URL da imagem"
        />
        <label htmlFor="cardRare">
          Raridade
          <select data-testid="rare-input" id="cardRare" name="cardRare">
            <option value="normal" defaultValue>Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="cardTrunfo">
          <input
            type="checkbox"
            id="cardTrunfo"
            name="cardTrunfo"
            data-testid="trunfo-input"
          />
          Super Trunfo
        </label>
        <button type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
