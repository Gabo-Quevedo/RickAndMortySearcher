import React from 'react';

import './styles/attribute.css';

function Attribute(props) {
  const prop = props;
  return (
    <fragment>
      <div className={prop.typeColor}>
        <label htmlFor="attributeName" id="attributeName" className="attributeContainer__type-name">{prop.contentType}</label>
      </div>
      <div className={prop.valueColor}>
        <label htmlFor="attributeValor" id="attributeValor" className="attributeContainer__value-name">{prop.contentValue}</label>
      </div>
    </fragment>
  );
}

export default Attribute;
