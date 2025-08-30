"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MapPin, FileText, Users, BabyIcon } from "lucide-react";
import { cn } from "@/shared/utils/shadcn_utils";

// 네비게이션 아이템 타입 정의
interface INavItem {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

// 공통 헤더 컴포넌트
export function Header() {
  // 현재 경로 가져오기
  const pathname = usePathname();

  // 네비게이션 아이템 목록 정의
  const navItems: INavItem[] = [
    { href: "/map", icon: MapPin, label: "지도 서비스" },
    { href: "/policy", icon: FileText, label: "정책 찾기" },
    { href: "/community", icon: Users, label: "커뮤니티" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-sky-100 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* 로고 및 내비게이션 */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white">
                <BabyIcon className="h-10 w-10 text-sky-500" />
              </div>
              <span className="text-xl font-bold text-gray-900">아이콤</span>
            </Link>

            <nav className="hidden items-center space-x-6 md:flex">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center space-x-1 transition-colors",
                      isActive
                        ? "font-medium text-sky-600"
                        : "text-gray-700 hover:text-sky-600",
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* 로그인 버튼 */}
          <Link href="/login">
            <Button
              variant="outline"
              className="border-sky-200 bg-transparent text-sky-700 hover:bg-sky-50"
            >
              로그인
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
