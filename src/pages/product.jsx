import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db, storage } from '../firebase';
import s from '../scss/pages/product.module.scss';

export default function Product() {
  const [data, setData] = useState(null);
  const [URL, setURL] = useState();
  const { someParams } = useParams();
  const storageRef = storage.ref();
  const stringy = someParams.toString();

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getData() {
    console.log('this is params', stringy);
    let doc = await db.collection('art').doc(stringy).get();
    let newUrl = await storageRef
      .child(`uploads/${doc.data().imgName}`)
      .getDownloadURL();
    setURL(newUrl);
    setData(doc);
  }

  return (
    <div>
      {data ? (
        <div className={s.container}>
          <div className={s.left}>
            <h1>{data.data().name}</h1>
            <p>{data.data().description}</p>
            <p>Price: {data.data().price}$</p>
          </div>
          <div className={s.center}>
            <img height='180rem' src={URL} alt='' />
          </div>
          <div className={s.right}>
            <h5>Creator:</h5>
            <p> {data.data().artist}</p>
            <h5>Created</h5>
            <p>{data.data().date || 'No registered date'}</p>
          </div>
        </div>
      ) : (
        <h1>Data does not exist</h1>
      )}
    </div>
  );
}
