import { MapPin } from "lucide-react";

// 지도 뷰 컴포넌트 (지도 표시 영역)
export function MapView() {
  return (
    <div className="flex-1 bg-gray-100 relative">
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500 text-xl">지도가 여기에 표시됩니다</p>
          <p className="text-gray-400 text-sm mt-2">실제 지도 API 연동 예정</p>
        </div>
      </div>
    </div>
  );
}
