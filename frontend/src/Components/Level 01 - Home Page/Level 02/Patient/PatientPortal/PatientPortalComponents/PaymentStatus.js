import React, { useContext, useState } from 'react'
import { DetailsProvider } from '../../../../../../Context/context';
import PaymentBox from './paymentBox';
function PaymentStatus() {
    const{user,appointment} = useContext(DetailsProvider);

  return (
    <>
    <div>
        <h1 style={{textAlign:'center',margin:'50px',fontSize:'40px',borderBottom:'4px solid #4f0408',fontFamily:'sans-serif', color:'#4f0408',paddingBottom:'10px'}}>Your Payment Status</h1>
        {appointment.map((appoint)=>(
            user.UserName===appoint.UserName && appoint.Status!=='-1' ?
            <PaymentBox appointment={appoint}></PaymentBox>
            :<></>
        ))}
    </div>
    
    </>
  )
}

export default PaymentStatus