import React from 'react';
import s from '../scss/layout/footer.module.scss';

const footer = () => {
  return (
    <div className={s.container}>
      <div className={s.text}>
        <h5>This is a school project</h5>
        <p>
          {' '}
          I'm learning some technologies that seems to be useful for the future.
        </p>
      </div>
      <div className={s.text}>
        <h5>Firebase Authentication, Storage and Firestore is used</h5>
        <p>Thanks to Google i don't need my own server for this</p>
      </div>
      <div className={s.text}>
        <h5>Just for fun</h5>
        <p>
          If you have any questions, please don't hesitate to contact me at
          Samuelsinkorg@gmail.com
        </p>
      </div>
    </div>
  );
};

export default footer;
