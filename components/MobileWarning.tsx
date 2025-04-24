"use client";
import { useEffect, useState } from "react";

const MobileWarning = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = typeof window !== "undefined" ? navigator.userAgent : "";
    const isMobileDevice = /Mobi|Android|iPhone|iPad|iPod/i.test(userAgent);
    setIsMobile(isMobileDevice);
  }, []);

  if (!isMobile) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      height: "100vh",
      width: "100vw",
      backgroundColor: "black",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999,
      fontSize: "1.5rem",
      textAlign: "center",
      padding: "2rem"
    }}>
      Este sitio solo está disponible en computadoras. Por favor accede desde un PC o laptop.
    </div>
  );
};

export default MobileWarning;
