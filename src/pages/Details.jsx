import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Attribute from '../components/Attribute';

import './styles/details.css';

export default class Details extends Component {
  constructor() {
    super();
    this.state = {
      // loading: true,
      error: null,
      data: {
        origin: {},
      },
    };
  }

  componentDidMount() {
    this.fetchDetails();
  }

  async fetchDetails() {
    this.setState({
      // loading: true,
      error: null,
    });

    const { match } = this.props;

    try {
      const numChar = match.params.charId;

      const response = await fetch(`https://rickandmortyapi.com/api/character/${numChar}`);
      const data = await response.json();
      this.setState({
        // loading: false,
        data,
      });
    } catch (error) {
      this.setState({
        // loading: false,
        error,
      });
    }
  }

  render() {
    const { error, data } = this.state;
    if (error) {
      return `Error: ${error.message}`;
    }
    return (
      <>
        <section className="details__content">
          <div className="charPicture">
            <img src={data.image} alt="" />
            <div className="charPicture__shadow" />
            <div className="charPicture-name">{data.name}</div>
            <div className="charPicture-origin">
              {`Origin-${data.origin.name}`}
            </div>
          </div>

          <div className="AttributeContainer">
            <Attribute
              valueColor="attributeContainer__value blue-value"
              typeColor="attributeContainer__type blue-type"
              contentValue={data.species || 'NONE'}
              contentType="SPECIES"
            />
            <Attribute
              valueColor="attributeContainer__value green-value"
              typeColor="attributeContainer__type green-type"
              contentValue={data.gender || 'NONE'}
              contentType="GENDER"
            />
            <Attribute
              valueColor="attributeContainer__value yellow-value"
              typeColor="attributeContainer__type yellow-type"
              contentValue={data.type || 'NONE'}
              contentType="TYPE"
            />
            <Attribute
              valueColor="attributeContainer__value red-value"
              typeColor="attributeContainer__type red-type"
              contentValue={data.status || 'NONE'}
              contentType="STATUS"
            />
          </div>
        </section>

      </>
    );
  }
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ charId: PropTypes.number }),
  }).isRequired,
};
