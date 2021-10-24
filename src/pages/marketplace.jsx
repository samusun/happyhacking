import React from 'react';
import Products from './../components/products';
import s from '../scss/pages/marketplace.module.scss';

export default function Marketplace() {
  return (
    <div className={s.container}>
      <h1>Marketplace</h1>
      <Products />
    </div>
  );
}
