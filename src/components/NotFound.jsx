import React from 'react';
import PNF from '../images/404.png';

import './styles/notFound.css';

function NotFound() {
  return (
    <>
      <div className="notFoundContainer">
        <div className="notFoundContainer__messaje">
          <h1>Do NOT play clever impostor</h1>
        </div>
        <picture className="notFoundContainer__picture">
          <img src={PNF} alt="404 Error" />
        </picture>
        <div className="notFoundContainer__picture-footer">Page Not Found</div>
      </div>
    </>
  );
}

export default NotFound;
