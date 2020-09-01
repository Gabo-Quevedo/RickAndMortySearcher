import React from 'react';
import { Link } from 'react-router-dom';

function CharBadge(props) {
  const prop = props;
  return (
    <Link to={`/character/${prop.character.id}`} className="fillList__content">
      <div className="fillList__content-card">
        <img src={prop.character.image} alt="Foto de personaje" />
      </div>
      <div className="fillList_content_nameContent">
        <label htmlFor="characterName" id="characterName" className="fillList_content_nameContent-name">{prop.character.name}</label>
      </div>
    </Link>
  );
}

export default CharBadge;
