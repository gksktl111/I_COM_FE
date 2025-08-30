import { MapPin } from "lucide-react";
import type { Place } from "@/features/map/types/place";

// 검색 결과 목록 컴포넌트 props 인터페이스
interface ISearchResultListProps {
  results?: Place[];
  isLoading?: boolean;
  onSelect?: (p: Place) => void;
}

// 검색 결과 목록 컴포넌트
export function SearchResultList({
  results = [],
  isLoading = false,
  onSelect,
}: ISearchResultListProps) {
  if (isLoading) {
    return (
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            검색 결과
          </h2>
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sky-500 mx-auto mb-4"></div>
            <p className="text-gray-500">검색 중...</p>
          </div>
        </div>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            검색 결과
          </h2>
          <div className="text-center py-12">
            <MapPin className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">
              지역을 검색하면 주변 시설들이 표시됩니다
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          검색 결과 ({results.length}개)
        </h2>
        <div className="space-y-3">
          {results.map((result) => (
            <div
              key={result.id}
              className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
              onClick={() => onSelect?.(result)}
            >
              <h3 className="font-medium text-gray-900 mb-1">{result.name}</h3>
              <p className="text-sm text-gray-600 mb-1">{result.address}</p>
              <span className="inline-block px-2 py-1 bg-sky-100 text-sky-700 text-xs rounded-full">
                {result.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
