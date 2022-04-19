import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/Card.css';
import logo from '../assets/tryunfo-logo.svg';
import TrashSvg from '../assets/TrashSvg';

class Card extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, isCardPreview,
      removeCard } = this.props;
    const REPEAT_LIMIT = 27;
    return (
      <section className="card-preview-container">
        <div className="card-preview">
          <h1 data-testid="name-card" className="card-name">{ cardName }</h1>
          <div className="image-card-container">
            <img
              data-testid="image-card"
              src={ cardImage }
              alt={ cardName }
              className="card-image"
            />
            {cardTrunfo && (
              <img
                data-testid="trunfo-card"
                className="card-trunfo"
                src={ logo }
                alt="Super Trunfo"
              />
            )}
          </div>
          <div className="card-description-container">
            <p
              data-testid="description-card"
              className="card-description"
            >
              { cardDescription }

            </p>
          </div>
          <ol className="card-attrs-list">
            <li data-testid="attr1-card" className="att-li">
              {
                `Atributo 01 ${'.'.repeat(REPEAT_LIMIT)} `
              }
              <span className="card-att-number">
                {cardAttr1}
              </span>
            </li>
            <li data-testid="attr2-card" className="att-li">
              {
                `Atributo 02 ${'.'.repeat(REPEAT_LIMIT)} `
              }
              <span className="card-att-number">
                {cardAttr2}
              </span>
            </li>
            <li data-testid="attr3-card" className="att-li">
              {
                `Atributo 03 ${'.'.repeat(REPEAT_LIMIT)} `
              }
              <span className="card-att-number">
                {cardAttr3}
              </span>
            </li>
          </ol>
          <h3 data-testid="rare-card" className="card-rare">{cardRare}</h3>
          {isCardPreview && (
            <button
              className="delete-btn"
              type="button"
              name={ cardName }
              data-testid="delete-button"
              onClick={ () => removeCard(cardName) }
            >
              <TrashSvg onClick={ () => removeCard(cardName) } />
            </button>
          )}
        </div>
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isCardPreview: PropTypes.bool.isRequired,
  removeCard: PropTypes.func.isRequired,
};

export default Card;
