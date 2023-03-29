import { createContext,useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({children}) => {
   const [loggedUser,setLoggedUser] = useState(null);
   const [cidade,setCidade] = useState(null);
   const [lojas,setLojas] = useState([]);

   return (
    <DataContext.Provider value={{loggedUser, setLoggedUser,cidade,setCidade,lojas,setLojas}}>
      {children}
    </DataContext.Provider>
)
}

export default DataContext;