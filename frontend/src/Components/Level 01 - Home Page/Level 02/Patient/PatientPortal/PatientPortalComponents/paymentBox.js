import React, { useState } from 'react';
import { payment } from '../../../../../../API/api';

function PaymentBox({ appointment }) {
  const [paymentLink, setPaymentLink] = useState('');
  const [showPaymentConfirmation, setShowPaymentConfirmation] = useState(false);

  const data = {
    name: appointment.Name,
    amount: parseInt(appointment.Fees, 10),
    Number: appointment.MobileNo,
    MUID: 'MUID' + Date.now(),
    transectionId: 'T' + Date.now(),
  };

  const payNow = async () => {
    try {
      setShowPaymentConfirmation(true);
      const res = await payment(data);
      setPaymentLink(res);
    } catch (error) {
      console.error('Error during payment:', error);
    }
  };

  const confirmPayment = () => {
    window.location.href = paymentLink;
  };

  const cancelPayment = () => {
    setShowPaymentConfirmation(false);
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderRadius: '5px',
          margin: '20px',
          backgroundColor: '#4ca4c7',
          border: '2px solid #123a4a',
          padding: '15px',
          alignItems: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <h2>{appointment.DoctorName}</h2>
        <h2>{appointment.Date}</h2>
        <h2>{appointment.Time}</h2>
        <h2>Rs. {appointment.Fees}</h2>
        {appointment.Payment === '-1' ? (
          <button onClick={payNow}>Pay Now</button>
        ) : (
          <button style={{ backgroundColor: '#30b852' }}>Paid</button>
        )}
      </div>

      {showPaymentConfirmation && (
        <div
          style={{
            backgroundColor: 'rgba(62, 62, 62, 0.631)',
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: '0px',
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: '300px',
              height: '300px',
              backgroundColor: '#56a373',
              border: '2px solid green',
              borderRadius: '10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <p style={{ fontSize: '25px', marginBottom: '30px' }}>
              Are you sure to pay now?
            </p>
            <button
              style={{ marginBottom: '15px', backgroundColor: '#1f8c2a' }}
              onClick={confirmPayment}
            >
              Yes! Pay now.
            </button>
            <button
              style={{ backgroundColor: '#ab2b2d' }}
              onClick={cancelPayment}
            >
              No, not now.
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default PaymentBox;
