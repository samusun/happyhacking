import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { Card, Button } from 'react-bootstrap';
import ye from '../assets/pictures/ye.png';
import s from '../scss/components/products.module.scss';

export default function Products() {
  const [data, setData] = useState([]);
  function run(id) {
    console.log(id);
  }
  useEffect(() => {
    db.collection('art')
      .get()
      .then((snapshot) => {
        setData(snapshot.docs);
      });
  }, []);

  return (
    <div>
      <div className={s.container}>
        {data.map((item) => (
          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src={ye} />
            <Card.Body>
              <Card.Title>{item.data().name}</Card.Title>
              <Card.Text>
                <p> By: {item.data().artist} </p>
                <p> Price: {item.data().price} </p>
              </Card.Text>
              <Button onClick={() => run(item.id)} variant='dark'>
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
