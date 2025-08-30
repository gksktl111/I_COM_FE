"use client";

// 사용하지 않는 import 제거
import { BabyIcon } from "lucide-react";
import { SocialLoginButtons } from "./SocialLoginButtons";

// 로그인 폼 컴포넌트
export function LoginForm() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-sky-50 to-blue-50 p-4">
      <div className="w-full max-w-md">
        {/* 로고 및 헤딩 */}
        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-500">
              <BabyIcon className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="mb-2 text-2xl font-bold text-gray-900">
            아이콤에 로그인
          </h1>
          <p className="text-gray-600">
            로그인 후 아이콤의 더 많은 기능을 이용해보세요!
          </p>
        </div>

        {/* 소셜 로그인 폼 */}
        <div className="rounded-2xl bg-white p-8 shadow-lg">
          {/* 안내 메시지 */}
          <div className="mb-6 text-center">
            <p className="text-gray-600">간편하게 소셜 계정으로 로그인하세요</p>
          </div>

          {/* 소셜 로그인 버튼들 */}
          <SocialLoginButtons />

          {/* 이용약관 */}
          <p className="mt-6 text-center text-xs leading-relaxed text-gray-500">
            로그인 시{" "}
            <a href="#" className="text-sky-600 underline hover:text-sky-500">
              이용약관
            </a>{" "}
            및{" "}
            <a href="#" className="text-sky-600 underline hover:text-sky-500">
              개인정보처리방침
            </a>
            에 동의하게 됩니다.
          </p>
        </div>
      </div>
    </div>
  );
}
