import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Student from '../Student';
import Footer from '../Footer';
import {Helmet } from 'react-helmet'

function Home() {
  return (
    <>
      <Helmet><title>JaWEB - Home</title></Helmet>
      <Student />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;