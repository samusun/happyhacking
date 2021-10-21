import React, { useState } from 'react';
import { Form, Button, ProgressBar, Image } from 'react-bootstrap';
import { db, storage } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import s from '../scss/pages/upload.module.scss';
import { useAuth } from './../context/AuthContext';

function Upload() {
  const { currentUser } = useAuth();
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState(null);
  const [url, setUrl] = useState('');
  const [progress, setProgress] = useState(0);
  const [disable, setDisable] = useState(true);

  console.log(currentUser);

  const handleChange = (e) => {
    console.log(e.target.files[0]);
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleUpload = () => {
    const uploadTask = storage
      .ref(`${currentUser.email}/${image.name}`)
      .put(image);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
            console.log(url);
          });
      }
    );
  };

  function handleSubmit(e) {
    setImageName(e.target[2].value);
    console.log(e.target);
    handleUpload();
    e.preventDefault();
    db.collection('art')
      .doc()
      .set({
        artist: e.target[1].value,
        name: e.target[2].value,
        description: e.target[3].value,
        price: e.target[4].value
      })
      .then(() => {
        console.log('Document successfully written!');
      })
      .catch((error) => {
        console.error('Error writing document: ', error);
      });
  }

  return (
    <div className={s.container}>
      <h1>Upload your creativity</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='image'>
          <Form.Control type='file' onChange={handleChange} required />
          <Image
            src={url || 'http://via.placeholder.com/300'}
            alt='firebase'
            thumbnail
          />
          <ProgressBar now={progress} />
        </Form.Group>

        <Form.Group className='mb-3' controlId='artist'>
          <Form.Label>Artist Name</Form.Label>
          <Form.Control type='text' required />
        </Form.Group>

        <Form.Group className='mb-3' controlId='name'>
          <Form.Label>Name of your creation</Form.Label>
          <Form.Control type='text' required />
        </Form.Group>

        <Form.Group className='mb-3' controlId='description'>
          <Form.Label>Description</Form.Label>
          <Form.Control as='textarea' rows={3} required />
        </Form.Group>

        <Form.Group className='mb-3' controlId='price'>
          <Form.Label>Price in $</Form.Label>
          <Form.Control type='number' placeholder='$' required />
        </Form.Group>

        <Button variant='dark' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Upload;
