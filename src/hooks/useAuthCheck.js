import { useEffect, useState } from "react";

const useAuthCheck = () => {
  const [authStatus, setAuthStatus] = useState({
    loading: true,
    authenticated: false,
  });

  useEffect(() => {
    const verify = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/verify-token`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          credentials: "include",
        });

        if (response.ok) {
          setAuthStatus({ loading: false, authenticated: true });
        } else {
          const refreshRes = await fetch(`${import.meta.env.VITE_API_URL}/auth/refresh-token`, {
            method: "POST",
            credentials: "include",
          });

          if (refreshRes.ok) {
            const data = await refreshRes.json();
            localStorage.setItem("accessToken", data.accessToken);
            setAuthStatus({ loading: false, authenticated: true });
          } else {
            setAuthStatus({ loading: false, authenticated: false });
          }
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        setAuthStatus({ loading: false, authenticated: false });
      }
    };

    verify();
  }, []);

  return authStatus;
};

export default useAuthCheck;
