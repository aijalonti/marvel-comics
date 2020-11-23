import React from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../../types';
import './styles.css';

// import { Container } from './styles';

const Details: React.FC = () => {
  const { state } = useLocation<Hero>();
  console.log(state);
  return (
    <div id='detailContainer'>
      <div className='heroDetails'>
        <img
          src={`${state.thumbnail.path}.${state.thumbnail.extension}`}
          alt={state.name}
        />
        <div className='heroDescription'>
          <strong className='heroDescriptionTitle'>{state.name}</strong>
          <p>{state.description ? state.description : 'No description'}</p>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 100,
            }}
          >
            <div className='heroDataField'>
              <strong>Quadrinhos</strong>
              <p>{state.comics.available}</p>
            </div>
            <div className='heroDataField'>
              <strong>Eventos</strong>
              <p>{state.events.available}</p>
            </div>
            <div className='heroDataField'>
              <strong>Séries</strong>
              <p>{state.series.available}</p>
            </div>
            <div className='heroDataField'>
              <strong>Histórias</strong>
              <p>{state.stories.available}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
