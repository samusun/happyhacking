import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, ProgressBar, Image } from 'react-bootstrap';
import { db, storage } from '../firebase';
import s from '../scss/pages/upload.module.scss';
import { useAuth } from './../context/AuthContext';

function Upload() {
  const formRef = useRef(null);
  const [uploadMsg, setUploadMsg] = useState(null);
  const storageRef = storage.ref();
  const { currentUser } = useAuth();
  const [image, setImage] = useState(null);
  const [fbUrl, setFbUrl] = useState(null);
  const [url, setUrl] = useState('');
  const [progress, setProgress] = useState(0);

  const today = new Date();
  const date =
    today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  const handleChange = (e) => {
    setUploadMsg(null);
    console.log(e.target.files[0]);
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`uploads/${image.name}`).put(image);
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
      }
    );
  };

  function getUrl() {
    storageRef
      .child(`uploads/${image.name}`)
      .getDownloadURL()
      .then((theUrl) => {
        setFbUrl(theUrl);
        console.log(fbUrl);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleSubmit(e) {
    console.log('in handle submit: ', e);
    e.preventDefault();
    handleUpload();
    setTimeout(function () {
      getUrl();
    }, 4000);

    setTimeout(function () {
      console.log(fbUrl);
      console.log('starting doc upload');
      db.collection('art')
        .doc()
        .set({
          artist: currentUser.email,
          name: e.target[1].value,
          description: e.target[2].value,
          price: e.target[3].value,
          url: fbUrl,
          imgName: image.name,
          date: date
        })
        .then(() => {
          console.log('Document successfully written!');
          setUploadMsg('Upload complete, check it out in Marketplace');
          formRef.current.reset();
        })
        .catch((error) => {
          console.error('Error writing document: ', error);
          setUploadMsg('Something went wrong, check the console');
        });
    }, 4500);
  }

  return (
    <div className={s.container}>
      <h1>Upload your creativity</h1>
      <p>{uploadMsg} </p>
      {currentUser ? (
        <div className={s.myForm}>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='image'>
              <Form.Control type='file' onChange={handleChange} required />
              <Image
                src={
                  url ||
                  'https://via.placeholder.com/400/000000/FFFFFF/?text=BeCreative'
                }
                alt='firebase'
                thumbnail
              />

              <ProgressBar now={progress} />
              {currentUser.email && (
                <Form.Label>Artist: {currentUser.email}</Form.Label>
              )}
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
      ) : (
        <>
          <h1> Your are not logged in</h1>
          <div className='w-100 text-center mt-2'>
            To upload your creativity you can choose to
            <Link to='/login'>
              {' '}
              <b> Login here, </b>
            </Link>
            or{' '}
            <Link to='/signup'>
              <b> Signup here </b>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Upload;
