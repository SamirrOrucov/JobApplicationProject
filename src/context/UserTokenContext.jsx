import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import React, { createContext, useState } from "react";
export const UserTokenContext = createContext();
import {  useNavigate } from "react-router-dom";

function UserTokenProvider({ children }) {
  const navigate= useNavigate()
  const [tokenn, setToken] = useState(
    Cookies.get("token") ? Cookies.get("token") : null
  );
  const [decodedToken, setDecodedToken] = useState(
    tokenn ? jwtDecode(tokenn) : null
  );

  function addToken(values) {
    setToken(values);
    const decoded = jwtDecode(values);
    setDecodedToken(decoded);
    Cookies.set("token", values, { expires: 7, secure: true });
  }

  function logOut() {
    setToken(null);
    setDecodedToken(null);
    Cookies.remove("token");
    navigate("/")

  }

 
  const data = { tokenn, decodedToken, addToken, logOut };

  return (
    <UserTokenContext.Provider value={data}>
      {children}
    </UserTokenContext.Provider>
  );
}

export default UserTokenProvider;
