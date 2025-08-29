import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";
import { LANDING_COPY } from "@/constants/copy";
import { cn } from "@/libs/utils";

// 검색바 컴포넌트 props 인터페이스
interface ISearchBarProps {
  locationClick?: boolean;
  className?: string;
  containerClassName?: string;
}

// 검색바 컴포넌트
export function SearchBar({
  locationClick = true,
  className,
  containerClassName,
}: ISearchBarProps) {
  // 현재 위치 찾기 함수
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("현재 위치:", position.coords);
          // TODO: 위치 정보를 이용한 검색 로직 구현
        },
        (error) => {
          console.error("위치 정보를 가져올 수 없습니다:", error);
        }
      );
    } else {
      alert("이 브라우저에서는 위치 서비스를 지원하지 않습니다.");
    }
  };

  return (
    <div className={cn("space-y-3 sm:space-y-4", containerClassName)}>
      {/* 현재 위치 찾기 버튼 */}
      {locationClick && (
        <div className="flex justify-center">
          <Button
            variant="outline"
            onClick={handleLocationClick}
            className="flex items-center gap-2 text-sky-600 border-sky-200 hover:bg-sky-50 text-sm sm:text-base px-3 sm:px-4 py-2 "
          >
            <MapPin className="w-4 h-4" />
            <span className="hidden sm:inline">현재 위치에서 찾기</span>
            <span className="sm:hidden">현재 위치</span>
          </Button>
        </div>
      )}

      {/* 검색창 */}
      <div
        className={cn(
          "relative max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto",
          className
        )}
      >
        <div className="relative">
          <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
          <Input
            type="text"
            placeholder={LANDING_COPY.searchPlaceholder}
            aria-label="장소 또는 키워드 검색"
            className="pl-10 sm:pl-12 pr-20 sm:pr-24 md:pr-32 lg:pr-36 py-3 sm:py-4 lg:py-5 text-base sm:text-lg rounded-xl sm:rounded-2xl border border-sky-200"
          />
          <Button
            size="sm"
            className="absolute right-1 sm:right-0 top-1/2 -translate-y-1/2 bg-sky-500 hover:bg-sky-600 rounded-lg sm:rounded-xl px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-5 cursor-pointer text-sm sm:text-base"
          >
            {LANDING_COPY.searchCta}
          </Button>
        </div>
      </div>
    </div>
  );
}
