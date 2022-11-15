import React, { createContext, useState } from "react";
import { User } from "../types/GlobalTypes";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState<User>();

  function LoginPass(user: User) {
    setUser(user);
  }

  return (
    <UserContext.Provider
      value={{
        user,
        LoginPass,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
