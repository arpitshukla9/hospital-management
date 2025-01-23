import React, { useEffect, useState, useContext } from 'react'
import './HomePage.css'
import HeaderHomePage from '../Components/Level 01 - Home Page/HeaderHomePage';
import BannerHomePage from '../Components/Level 01 - Home Page/BannerHomePage';
import BookingHomePage from '../Components/Level 01 - Home Page/BookingHomePage'
import ReviewHomePage from '../Components/Level 01 - Home Page/PeopleReview';
import FooterHomePage from '../Components/Level 01 - Home Page/FooterHomePage';
import FeedbackForm from './Level 01 - Home Page/FeedbackForm';

function HomePage() {
  
  return (
    <div className='HomePage' id='HomePage'>
      <HeaderHomePage></HeaderHomePage>
      <BannerHomePage></BannerHomePage>
      <h1>Login and Registration</h1>
      <BookingHomePage></BookingHomePage>
      <h1>Reviews of Our Hospital</h1>
      <ReviewHomePage></ReviewHomePage>
      <FeedbackForm></FeedbackForm>
      <FooterHomePage></FooterHomePage>
    </div>
  )
}

export default HomePage