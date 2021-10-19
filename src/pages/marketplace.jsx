import React from 'react';
import { useParams } from 'react-router-dom';

export default function Marketplace() {
  const { someParams } = useParams();
  console.log(someParams);

  return <div>This is Marketplace</div>;
}
