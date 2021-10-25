import React from 'react';
import s from '../scss/layout/footer.module.scss';

const footer = () => {
  return (
    <div className={s.container}>
      <div className={s.text}>
        <h5>The future of art collecting</h5>
        <p>
          Browse and build your collection of the world’s most cutting-edge
          digital art
        </p>
      </div>
      <div className={s.text}>
        <h5>Pioneering art market royalties</h5>
        <p>
          Artists receive continuous royalties for all secondary sales on their
          artworks – forever
        </p>
      </div>
      <div className={s.text}>
        <h5>Built for longevity</h5>
        <p>
          All transactions happen on-chain, creating a tamper-proof record of
          each artwork’s history
        </p>
      </div>
    </div>
  );
};

export default footer;
