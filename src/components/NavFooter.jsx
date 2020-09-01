import React from 'react';

import More from '../images/More.svg';

import './styles/navFooter.css';

function NavFooter(props) {
  const prop = props;
  return (
    <footer>
      <div className="navFooter_container">
        <div to="#" className="navFooter_container-prevBtn">
          <div role="button" tabIndex="0" onKeyPress={prop.spaceMore} onClick={prop.more}>
            <img src={More} alt="Cargar más Personajes" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default NavFooter;
