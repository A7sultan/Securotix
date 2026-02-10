import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { removeToken } from "@/pages/admin/blogs/removeTokenService";

const IDLE_TIME = 15 * 60 * 1000; 

export default function useAutoLogout() {
  const navigate = useNavigate();

  useEffect(() => {
    let timeout: any;

    const logout = () => {
      removeToken();               
      navigate("/admin/login", { replace: true });
    };

    const resetTimer = () => {
      clearTimeout(timeout);
      timeout = setTimeout(logout, IDLE_TIME);
    };

    const events = [
      "mousemove",
      "mousedown",
      "keypress",
      "scroll",
      "touchstart"
    ];

    events.forEach((event) =>
      window.addEventListener(event, resetTimer)
    );

    resetTimer(); 

    return () => {
      clearTimeout(timeout);
      events.forEach((event) =>
        window.removeEventListener(event, resetTimer)
      );
    };
  }, [navigate]);
}
