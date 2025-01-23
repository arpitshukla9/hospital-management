import { createContext, useState } from 'react';

export const DetailsProvider = createContext(null);

const Details = ({ children }) => {
  const [user, setUser] = useState({});
  const [appointment,setAppointment] = useState([]);
  
  return (
    <DetailsProvider.Provider value={{
        user,
        setUser,
        appointment,
        setAppointment,
        
    }}>
      {children}
    </DetailsProvider.Provider>
  );
};

export default Details;
