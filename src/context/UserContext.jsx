import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [tokenContext, setTokenContext] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    async function userData() {
      if (tokenContext) {
        const response = await getUserProfile();
        console.log("LO QUE VIENE EN EL PERFIL", response);
      }
    }
    userData();
  }, [tokenContext]);

  const getToken = () => {
    if (tokenContext) {
      return tokenContext;
    }
    return localStorage.getItem("token");
  };

  const logout = () => {
    setTokenContext("");
    localStorage.clear("token");
    window.location.reload();
  };

  const doLogin = async (requestBody) => {
    const url = "http://localhost:5000/api/auth/login";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error);
    }

    const data = await response.json();
    localStorage.setItem("token", data.token);
    setTokenContext(data.token);
    setEmail(data.email);
  };

  const doRegister = async (requestBody) => {
    const url = "http://localhost:5000/api/auth/register";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error);
    }

    const data = await response.json();
    setTokenContext(data.token);
    setEmail(data.email);
  };

  const getUserProfile = async () => {
    const url = "http://localhost:5000/api/auth/me";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "content-Type": "application/json",
        Authorization: `Bearer ${tokenContext}`,
      }
    });
    const data = await response.json();
    return data;
  };

  return (
    <UserContext.Provider
      value={{ getToken, logout, doLogin, doRegister, email }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
