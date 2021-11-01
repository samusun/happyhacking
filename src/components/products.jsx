import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db, storage } from '../firebase';
import { Card, Button, Spinner } from 'react-bootstrap';
import s from '../scss/components/products.module.scss';

export default function Products() {
  const storageRef = storage.ref();
  const [data, setData] = useState([]);
  const [imgData, setImgData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  let newArr = [];

  useEffect(() => {
    setData([]);
    setImgData([]);
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getData() {
    db.collection('art')
      .get()
      .then((snapshot) => {
        setData(snapshot.docs);
        console.log('in get data', data);
        setLoaded(true);
      });
  }

  setTimeout(function () {
    if (loaded) {
      getImgUrl();
    }
  }, 3000);

  /*
  function getImgUrl() {
    storageRef
      .child(`uploads/`)
      .listAll()
      .then(function (result) {
        console.log(result);
        result.items.forEach(async function (imgRef) {
          let result = await imgRef.getDownloadURL();
          newArr.push(result);
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    setLoaded(false);
    setAllData();
  }

  */

  async function getImgUrl() {
    for (let i = 0; i < data.length || setAllData(); i++) {
      storageRef
        .child(`uploads/${data[i].data().imgName}`)
        .getDownloadURL()
        .then((url) => {
          newArr[i] = url;
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setLoaded(false);
  }

  function setAllData() {
    setImgData(newArr);
    let allArr = data;
    for (let i = 0; i < data.length; i++) {
      allArr[i].imgUrl = imgData[i];
    }
    setData(allArr);
  }

  return (
    <div className={s.container}>
      {data.map((item) => (
        <Card
          key={item.id}
          style={{ width: '18rem' }}
          className={s.cardContainer}
        >
          <div className={s.imageContainer}>
            {item.imgUrl ? (
              <Card.Img variant='top' height='100%' src={item.imgUrl} />
            ) : (
              <Spinner animation='border' role='status' />
            )}
          </div>
          <Card.Body>
            <Card.Title>{item.data().name}</Card.Title>
            <Card.Text>
              By: {item.data().artist}
              <br />
              {item.data().price}$
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
