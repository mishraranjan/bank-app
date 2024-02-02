import LatestArticle from '../Components/LatestArticle/LatestArticle';
import Quote from '../Components/Quote/Quote';
import PopularBooks from '../Components/PopularBooks/PopularBooks';
import BestSellingBook from '../Components/BestSellingBook/BestSellingBook';
import Brands from '../Components/Brands/Brands';
import FeaturesBooks from '../Components/FeaturesBooks/FeaturesBooks';
import Header from '../Components/Header/Header';

import React from 'react';


function Home() {
  return (
    <>
    <Header/>
    <Brands/>
    <FeaturesBooks/>
    <BestSellingBook/>
    <PopularBooks/>
    <Quote/>
    <LatestArticle/>
    </>
  )
}

export default Home