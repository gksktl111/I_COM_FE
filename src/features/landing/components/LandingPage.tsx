"use client";

// 랜딩 페이지 메인 컴포넌트
import { HeroSection } from "./HeroSection";
import { SearchBar } from "./SearchBar";
import { PopularKeywords } from "./PopularKeywords";
import { TrustSection } from "./TrustSection";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-4xl px-3 sm:px-4 md:px-6 lg:px-8 pt-12 sm:pt-16 pb-16 sm:pb-24">
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
