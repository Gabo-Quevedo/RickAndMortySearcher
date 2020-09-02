import React from 'react';

import './styles/attribute.css';

function Attribute(props) {
  const prop = props;
  return (
    <div className="attributeComponent">
      <div className={prop.typeColor}>
        <label htmlFor="attributeName" id="attributeName" className="attributeContainer__type-name">{prop.contentType}</label>
      </div>
      <div className={prop.valueColor}>
        <label htmlFor="attributeValor" id="attributeValor" className="attributeContainer__value-name">{prop.contentValue}</label>
      </div>
    </div>
  );
}

export default Attribute;
