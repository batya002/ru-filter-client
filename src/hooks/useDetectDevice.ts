import { useEffect } from "react";
import { useDeviceStore } from "@/store/useDeviceStore";

const checkIsMobile = () => {
  if (typeof navigator === "undefined") return false;
  const userAgent = navigator.userAgent;
  return /Mobi|Android|iPhone|iPad|iPod/i.test(userAgent);
};

export function useDetectDevice() {
  const setIsMobile = useDeviceStore((state) => state.setIsMobile);

  useEffect(() => {
    const isMobile = checkIsMobile();
    setIsMobile(isMobile);
  }, [setIsMobile]);
}
