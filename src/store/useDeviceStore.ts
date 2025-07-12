import { create } from "zustand";

interface DeviceState {
  isMobile: boolean | null;
  setIsMobile: (value: boolean) => void;
}

export const useDeviceStore = create<DeviceState>((set) => ({
  isMobile: null,
  setIsMobile: (value) => set({ isMobile: value }),
}));
