"use client";

// 랜딩 페이지 메인 컴포넌트
import { HeroSection } from "./HeroSection";
import { SearchBar } from "../../../components/common/SearchBar";
import { PopularKeywords } from "./PopularKeywords";
import { TrustSection } from "./TrustSection";
import { useGeolocation } from "@/shared/hooks/useGeolocation";

export function LandingPage() {
  // 위치 자동 조회만 실행(반환값 미사용)
  useGeolocation({ auto: true });
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-4xl px-3 pt-12 pb-16 sm:px-4 sm:pt-16 sm:pb-24 md:px-6 lg:px-8">
        <div className="space-y-8 sm:space-y-12">
          <HeroSection />
          <SearchBar />
          <PopularKeywords />
          <TrustSection />
        </div>
      </main>
    </div>
  );
}
