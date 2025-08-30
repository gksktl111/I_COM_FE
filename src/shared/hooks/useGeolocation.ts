"use client";
import { useCallback } from "react";
import { useLocationStore } from "../store/location.store";

export function useGeolocation(options?: { auto?: boolean }) {
  const {
    location,
    address,
    setLocation,
    setAddress,
    locating,
    resolving,
    setLocating,
    setResolving,
  } = useLocationStore();

  const reverseGeocode = useCallback(
    async (lat: number, lng: number) => {
      try {
        setResolving(true);
        const res = await fetch(`/api/revgeo?lat=${lat}&lng=${lng}`);
        const data = await res.json();
        setAddress(data?.address ?? null);
      } catch (e) {
        console.error("Reverse geocoding failed", e);
        setAddress(null);
      } finally {
        setResolving(false);
      }
    },
    [setAddress, setResolving],
  );

  const fetchLocation = useCallback(() => {
    if (!navigator.geolocation) {
      console.error("이 브라우저는 Geolocation API를 지원하지 않습니다.");
      return;
    }
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        setLocation({ lat, lng });
        setLocating(false);
        // 좌표 저장 후 바로 역지오코딩
        reverseGeocode(lat, lng);
      },
      (err) => {
        console.error("위치 권한 거부 또는 오류:", err);
        setLocating(false);
      },
      { enableHighAccuracy: true },
    );
  }, [setLocating, setLocation, reverseGeocode]);

  // auto 옵션 필요 시(기본 비활성). 자동 실행 원하면 options?.auto === true 로 사용
  // if (options?.auto && !location) fetchLocation();  // 원하면 이 라인 패턴으로 확장

  return { location, address, locating, resolving, fetchLocation };
}
