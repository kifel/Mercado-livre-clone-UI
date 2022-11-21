import React, { createContext, useState } from "react";

type ContextTypes = {
  user: String;
  setUser: (newState: String) => void;
  LoginPass: (newState: String) => void;
};

const initialValues = {
  user: "",
  setUser: () => {},
  LoginPass: () => {},
};

export const UserContext = createContext<ContextTypes>(initialValues);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState<String>(initialValues.user);

  function LoginPass(user: string) {
    setUser(user);
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        LoginPass,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
