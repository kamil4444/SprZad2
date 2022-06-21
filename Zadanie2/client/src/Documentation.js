import React from 'react';
import { Link } from 'react-router-dom';
import arch from './arch.png';

export default () => {
  return (
    <div>
      <Link to="/">Go back home</Link>
      <br />
      Przykładowa architektura usługi liczenia n-tego wyrazu ciagu arytmetycznego
      Kamil Rytel IIST6.8/IO
      modyfikowana funkcja tak, zeby obliczala nty wyraz ciagu dla jakiegos k gdzie a1 = 3 i roznica r=2
      <br />
      <img src={arch} alt="arch" />
    </div>
  );
};
