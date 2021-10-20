import React from 'react';
import { useParams } from 'react-router-dom';

export default function Product() {
  const { someParams } = useParams();

  return (
    <div>
      <h1> This is product</h1>
      <p>{someParams}</p>
    </div>
  );
}
