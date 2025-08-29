// copy.ts — 랜딩 전용 카피 상수 (features/landing/constants로 분리 추천)
export const LANDING_COPY = {
  titleLead: "부모가 먼저 추천하는",
  titleEmph: "우리 동네 육아 정보",
  subtitle:
    "소아병원부터 아이 동반 카페, 어린이집까지. 지금 내 위치 기준으로 빠르게 찾고 부모 커뮤니티와 연결해요.",
  searchPlaceholder: "지역명, 지하철역, 우편번호 또는 키워드를 입력해 보세요",
  searchCta: "검색",
  popularLabel: "요즘 많이 찾는 키워드",
  trust: {
    map: {
      title: "지도 서비스",
      desc: "내 위치 기준 주변 보육·복지 시설을 한눈에",
    },
    policy: {
      title: "정책 찾기",
      desc: "가족 형태·소득을 입력하면 맞춤 혜택 추천",
    },
    community: {
      title: "커뮤니티 소개",
      desc: "동네 부모들과 후기·정보를 나눠요",
    },
  },
  keywords: [
    "소아병원",
    "아이 동반 카페",
    "산후조리원",
    "어린이집",
    "출산지원금",
    "산부인과",
    "어린이 놀이터",
    "신혼부부 전세대출",
  ],
} as const;
