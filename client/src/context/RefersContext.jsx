import { createContext ,useState} from "react";
// Create context
export const ReferContext = createContext();

// Provider component
export const RefersProvider = ({ children }) => {
  const [taskMoney , setTaskMoney]=useState(0)

  return <ReferContext.Provider value={{taskMoney,setTaskMoney}}>{children}</ReferContext.Provider>;
};
