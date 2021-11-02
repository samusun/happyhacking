import React from 'react';
import MyCarousel from './../components/carousel';
import s from '../scss/pages/home.module.scss';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className={s.container}>
      <div className={s.HeroContainer}>
        <div className={s.HeroText}>
          <h1 id={s.HeroTitle}>Collect digital art</h1>
          <p id={s.HeroDescription}>
            Buy and sell NFTs from all over the world
          </p>
          <Button variant='dark'>
            <Link to='/marketplace' id={s.link}>
              Start Collecting
            </Link>
          </Button>
        </div>
        <MyCarousel />
      </div>
    </div>
  );
}
