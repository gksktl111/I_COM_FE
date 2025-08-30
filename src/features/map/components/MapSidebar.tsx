"use client";

import { SearchBar } from "@/features/landing/components";
import { SearchResultList } from "./SearchResultList";

// 지도 사이드바 컴포넌트 props 인터페이스
interface IMapSidebarProps {
  searchResults?: Array<{
    id: string;
    name: string;
    address: string;
    category: string;
  }>;
  isLoading?: boolean;
}

// 지도 사이드바 컴포넌트 (검색 영역)
export function MapSidebar({ searchResults, isLoading }: IMapSidebarProps) {
  return (
    <div className="flex min-w-[350px] flex-col border-r border-gray-200 bg-white md:w-96">
      {/* 검색창 */}
      <SearchBar currentLocation={false} className="mt-4 px-4" />

      {/* 검색 결과 목록 */}
      <SearchResultList results={searchResults} isLoading={isLoading} />
    </div>
  );
}
