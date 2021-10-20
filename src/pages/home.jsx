import React from 'react';
import MyCarousel from './../components/carousel';
import s from '../scss/pages/home.module.scss';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from './../context/AuthContext';

export default function Home() {
  const { currentUser } = useAuth();
  let startCollecting = '/signup/getStarted';
  if (currentUser) {
    startCollecting = '/marketplace';
  }
  return (
    <div className={s.container}>
      <div className={s.HeroContainer}>
        <div className={s.HeroText}>
          <h1 id={s.HeroTitle}>Collect digital art</h1>
          <p id={s.HeroDescription}>
            Buy and sell NFTs from all over the world
          </p>
          <Button variant='dark'>
            <Link to={startCollecting} id={s.link}>
              Start Collecting
            </Link>
          </Button>
        </div>
        <MyCarousel />
      </div>
    </div>
  );
}
