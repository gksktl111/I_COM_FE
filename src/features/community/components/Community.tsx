import { Users, MessageCircle, Calendar, Heart, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

// 커뮤니티 메인 컴포넌트
export function Community() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 페이지 헤더 */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            부모 커뮤니티
          </h1>
          <p className="text-lg text-gray-600">
            같은 지역 부모들과 소통하고 정보를 나누세요
          </p>
        </div>

        {/* 커뮤니티 액션 버튼 */}
        <div className="text-center mb-8">
          <Button className="bg-sky-500 hover:bg-sky-600 flex items-center gap-2 mx-auto">
            <Plus className="w-4 h-4" />새 글 작성
          </Button>
        </div>

        {/* 커뮤니티 카테고리 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              자유 게시판
            </h3>
            <p className="text-gray-600 text-sm">부모들의 자유로운 소통 공간</p>
            <p className="text-sky-600 text-xs mt-2">게시글 0개</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              육아 정보
            </h3>
            <p className="text-gray-600 text-sm">육아 팁과 경험 공유</p>
            <p className="text-sky-600 text-xs mt-2">게시글 0개</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              모임 및 행사
            </h3>
            <p className="text-gray-600 text-sm">지역 모임과 행사 정보</p>
            <p className="text-sky-600 text-xs mt-2">게시글 0개</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              중고 거래
            </h3>
            <p className="text-gray-600 text-sm">육아용품 나눔과 거래</p>
            <p className="text-sky-600 text-xs mt-2">게시글 0개</p>
          </div>
        </div>

        {/* 최근 게시글 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            최근 게시글
          </h2>
          <div className="text-center py-12">
            <MessageCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg mb-2">아직 게시글이 없습니다</p>
            <p className="text-gray-400 text-sm">
              첫 번째 게시글을 작성해보세요!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
