import { Badge } from "@/components/ui/badge";
import { LANDING_COPY } from "@/constants/copy";

// 인기 키워드 섹션 컴포넌트
export function PopularKeywords() {
  return (
    <div className="space-y-4">
      <p className="flex justify-center text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wide">
        {LANDING_COPY.popularLabel}
      </p>
      <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto">
        {LANDING_COPY.keywords.map((keyword) => (
          <Badge
            key={keyword}
            variant="secondary"
            className="bg-sky-50 text-sky-700 hover:bg-sky-100 cursor-pointer transition-colors px-2.5 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-full border border-sky-200 text-xs sm:text-sm"
            aria-label={`${keyword} 검색`}
          >
            {keyword}
          </Badge>
        ))}
      </div>
    </div>
  );
}
