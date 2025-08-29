import { FileText, Search, Calendar, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

// 정책 찾기 메인 컴포넌트
export function PolicyFinder() {
  // 인기 정책 카테고리 정의
  const policyCategories = [
    "육아휴직",
    "보육료 지원",
    "출산 지원금",
    "아동수당",
    "의료비 지원",
    "양육수당",
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 페이지 헤더 */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">정책 찾기</h1>
          <p className="text-lg text-gray-600">
            육아와 가족을 위한 정부 지원 정책을 쉽게 찾아보세요
          </p>
        </div>

        {/* 검색 영역 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="지원 정책명이나 키워드를 입력하세요"
              className="pl-12 pr-4 py-3 text-lg"
            />
            <Button
              size="lg"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-sky-500 hover:bg-sky-600"
            >
              검색
            </Button>
          </div>
        </div>

        {/* 인기 정책 카테고리 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 text-center">
            인기 정책 분야
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {policyCategories.map((category, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-sky-50 text-sky-700 hover:bg-sky-100 cursor-pointer transition-colors px-4 py-2 rounded-full border border-sky-200"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* 정책 카테고리 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              출산 및 육아 지원
            </h3>
            <p className="text-gray-600 text-sm">
              출산 지원금, 육아휴직, 보육료 지원 등
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              가족 복지
            </h3>
            <p className="text-gray-600 text-sm">
              아동수당, 가족돌봄휴가, 양육수당 등
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              의료 및 건강
            </h3>
            <p className="text-gray-600 text-sm">
              의료비 지원, 건강검진, 예방접종 등
            </p>
          </div>
        </div>

        {/* 최신 정책 뉴스 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            최신 정책 소식
          </h2>
          <div className="text-center py-8">
            <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">
              최신 정책 정보가 업데이트될 예정입니다
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
