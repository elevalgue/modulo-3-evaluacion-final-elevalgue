import React from 'react';
import { Link } from 'react-router-dom';

const CharacterCard = (props) => {
  //recibo las props
  return (
    //añado a cada prop la propiedad que quiero pintar
    <Link to={`/character/${props.id}`} className='character__link'>
      <li className='characters' key={props.id}>
        <img src={props.image} alt={props.name} />
        <div className='characters__card'>
          <h2 className='characters__name'>{props.name}</h2>
          <p className='characters__specie'>{props.specie}</p>
        </div>
      </li>
    </Link>
  );
};

export default CharacterCard;
