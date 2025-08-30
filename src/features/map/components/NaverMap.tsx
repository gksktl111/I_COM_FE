// src/features/map/components/NaverMap.tsx
"use client";
import { useGeolocation } from "@/shared/hooks/useGeolocation";
import { useEffect, useRef } from "react";

export function NaverMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const { location } = useGeolocation({ auto: false });

  useEffect(() => {
    if (!mapRef.current || !location) return;
    const w = window as Window & typeof globalThis;
    if (!w.naver) return;
    const { naver } = w;

    const center = new naver.maps.LatLng(location.lat, location.lng);
    const map = new naver.maps.Map(mapRef.current, { center, zoom: 13 });
    new naver.maps.Marker({ position: center, map });
  }, [location]);

  return <div ref={mapRef} style={{ width: "100%", height: "100%" }} />;
}
