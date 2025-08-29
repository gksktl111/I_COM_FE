import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, FileText, Users, BabyIcon } from "lucide-react";

// 공통 헤더 컴포넌트
export function Header() {
  return (
    <header className="border-b border-sky-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* 로고 및 내비게이션 */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <BabyIcon className="w-10 h-10  text-sky-500" />
              </div>
              <span className="text-xl font-bold text-gray-900">아이콤</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-6">
              <Link
                href="/map"
                className="flex items-center space-x-1 text-gray-700 hover:text-sky-600 transition-colors"
              >
                <MapPin className="w-4 h-4" />
                <span>지도 서비스</span>
              </Link>
              <Link
                href="/policy"
                className="flex items-center space-x-1 text-gray-700 hover:text-sky-600 transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>정책 찾기</span>
              </Link>
              <Link
                href="/community"
                className="flex items-center space-x-1 text-gray-700 hover:text-sky-600 transition-colors"
              >
                <Users className="w-4 h-4" />
                <span>커뮤니티</span>
              </Link>
            </nav>
          </div>

          {/* 로그인 버튼 */}
          <Button
            variant="outline"
            className="border-sky-200 text-sky-700 hover:bg-sky-50 bg-transparent"
          >
            로그인
          </Button>
        </div>
      </div>
    </header>
  );
}
