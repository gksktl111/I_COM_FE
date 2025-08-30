"use client";

import { useState } from "react";
import { MapSidebar } from "./MapSidebar";
import { MapView } from "./MapView";

// 지도 서비스 메인 컴포넌트
export function MapService() {
  // 검색 결과 상태 관리
  const [searchResults] = useState<
    Array<{
      id: string;
      name: string;
      address: string;
      category: string;
    }>
  >([]);
  const [isLoading] = useState(false);

  return (
    <div className="h-screen flex">
      <MapSidebar searchResults={searchResults} isLoading={isLoading} />
      <MapView />
    </div>
  );
}
