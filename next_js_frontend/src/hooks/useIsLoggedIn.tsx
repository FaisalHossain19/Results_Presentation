import { useState, useEffect } from "react";

export const useIsLoggedIn = (): boolean => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsLoggedIn(!!token); // Set to true if the token exists
  }, []);

  return isLoggedIn;
};
