import React from 'react'
import './ReviewBox.css'
function ReviewBox({review,rating,name,img}) {
  return (
    <div className='ReviewBox'>
        <div className='ReviewerInfo'>
            <img src={img}></img>
            <div className='RatingAndName'>
                <h2>{name}</h2>
                <p>{rating}</p>
            </div>
        </div>
        <div className='ReviewerReview'>
            <p>{review}</p>
        </div>
    </div>
  )
}

export default ReviewBox