import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [tokenContext, setTokenContext] = useState(false);

  const logout = () => {
    setTokenContext(false)
  }

  return (
    <UserContext.Provider value={{ tokenContext, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
