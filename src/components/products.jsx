import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db, storage } from '../firebase';
import { Card, Button } from 'react-bootstrap';
import s from '../scss/components/products.module.scss';

export default function Products() {
  const storageRef = storage.ref();
  const [data, setData] = useState([]);
  const [imgData, setImgData] = useState([]);

  useEffect(() => {
    let newArr = [];
    function getData() {
      db.collection('art')
        .get()
        .then((snapshot) => {
          setData(snapshot.docs);
        });
    }
    getData();

    for (let i = 0; i < data.length; i++) {
      console.log('forloop is running');
      storageRef
        .child(`uploads/${data[i].data().imgId}`)
        .getDownloadURL()
        .then((url) => {
          newArr.push(url);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setImgData(newArr);
    console.log(imgData);
    let allArr = data;
    for (let i = 0; i < data.length; i++) {
      allArr[i].imgUrl = imgData[i];
    }
    setData(allArr);
    console.log(data);
  }, []);

  return (
    <div className={s.container}>
      {data.map((item) => (
        <Card key={item.id} style={{ width: '18rem' }}>
          <Card.Img variant='top' src={item.data().url} />
          <Card.Body>
            <Card.Title>{item.data().name}</Card.Title>
            <Card.Text>
              <p> By: {item.data().artist} </p>
              <p> Price: {item.data().price} </p>
            </Card.Text>
            <Link to={`marketplace/${item.id}`}>
              <Button variant='dark'>Go to product</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
