import React from 'react'
import {payment} from '../API/api';
function trial() {
    const data={
        name:'Prashant',
        amount:1,
        Number:'7060133191',
        MUID:'MUID'+Date.now(),
        transectionId:'T'+Date.now()
    }

    const handlePayment=async(e)=>{
        e.preventDefault();
        await payment(data);
    }
  return (
    <div>
        <button onClick={handlePayment}>btn</button>
    </div>
  )
}

export default trial