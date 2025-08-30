import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";
import Script from "next/script";

// 메타데이터 설정 - 페이지 제목과 설명 정의
export const metadata: Metadata = {
  title: "케어커넥트 - 믿을 수 있는 보육시설을 찾아보세요",
  description:
    "지역 내 소아병원, 아이 친화적 카페, 어린이집, 가족 서비스를 찾아보세요. 부모 커뮤니티와 연결하세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const key = process.env.NEXT_PUBLIC_NCP_KEY_ID!;

  return (
    <html lang="ko">
      <body>
        <Suspense fallback={null}>{children}</Suspense>
        {/* 콜백 핑퐁: SDK 준비되면 커스텀 이벤트 발생 */}
        <Script id="naver-maps-callback" strategy="beforeInteractive">
          {`
            window.__naver_maps_loaded = false;
            window.__initNaverMaps = function () {
              window.__naver_maps_loaded = true;
              document.dispatchEvent(new Event('naver-maps-loaded'));
            };
          `}
        </Script>

        {/* 공식 가이드: ncpKeyId + callback */}
        <Script
          src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${key}&callback=__initNaverMaps`}
          strategy="afterInteractive"
        />
        <Analytics />
      </body>
    </html>
  );
}
