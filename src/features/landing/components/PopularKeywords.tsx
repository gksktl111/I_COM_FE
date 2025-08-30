"use client";

import { Badge } from "@/components/ui/badge";
import { LANDING_COPY } from "@/constants/copy";
import { useRouter } from "next/navigation";

// 인기 키워드 섹션 컴포넌트
export function PopularKeywords() {
  const router = useRouter();
  return (
    <div className="space-y-4">
      <p className="flex justify-center text-xs font-medium tracking-wide text-gray-500 uppercase sm:text-sm">
        {LANDING_COPY.popularLabel}
      </p>
      <div className="mx-auto flex max-w-xs flex-wrap justify-center gap-1.5 sm:max-w-2xl sm:gap-2 lg:max-w-3xl">
        {LANDING_COPY.keywords.map((keyword) => (
          <Badge
            key={keyword}
            variant="secondary"
            className="cursor-pointer rounded-full border border-sky-200 bg-sky-50 px-2.5 py-1.5 text-xs text-sky-700 transition-colors hover:bg-sky-100 sm:px-3 sm:py-2 sm:text-sm lg:px-4"
            aria-label={`${keyword} 검색`}
            onClick={() => router.push(`/map?q=${encodeURIComponent(keyword)}`)}
          >
            {keyword}
          </Badge>
        ))}
      </div>
    </div>
  );
}
