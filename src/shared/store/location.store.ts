import { create } from "zustand";

export type Location = { lat: number; lng: number };

interface LocationState {
  location: Location | null;
  address: string | null;
  locating: boolean; // geolocation 동작 중
  resolving: boolean; // reverse geocoding 동작 중
  setLocation: (loc: Location) => void;
  setAddress: (addr: string | null) => void;
  setLocating: (b: boolean) => void;
  setResolving: (b: boolean) => void;
  clearLocation: () => void;
}

export const useLocationStore = create<LocationState>((set) => ({
  location: null,
  address: null,
  locating: false,
  resolving: false,
  setLocation: (loc) => set({ location: loc }),
  setAddress: (addr) => set({ address: addr }),
  setLocating: (b) => set({ locating: b }),
  setResolving: (b) => set({ resolving: b }),
  clearLocation: () => set({ location: null, address: null }),
}));
