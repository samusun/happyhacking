import React from 'react';
import MyCarousel from './../components/carousel';
import s from '../scss/pages/home.module.scss';

export default function home() {
  return (
    <div className={s.container}>
      <div>
        <h1 id={s.HeroTitle}>Collect digital art</h1>
        <p id={s.HeroDescription}>Buy and sell NFTs from all over the world</p>
      </div>
      <MyCarousel />
    </div>
  );
}
