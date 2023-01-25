import { ReactNode, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TokenContext from "./TokenContext";

const TokenProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("login-token");

  const saveToken = useCallback(
    (token: string) => {
      console.log("saveToken");
      localStorage.setItem("login-token", token);
      navigate("/");
    },
    [navigate],
  );

  const clearToken = useCallback(() => {
    localStorage.removeItem("login-token");
    navigate("/auth/login");
  }, [navigate]);

  return (
    <TokenContext.Provider value={{ token, saveToken, clearToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export default TokenProvider;
