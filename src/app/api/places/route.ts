import { NextRequest, NextResponse } from "next/server";

type Place = {
  id: string;
  name: string;
  category: string;
  address?: string;
  lat: number;
  lng: number;
};

// Very lightweight dev fallback around current lat/lng
function stubPlaces(query: string, lat: number, lng: number): Place[] {
  const centers: Array<{ name: string; category: string }> = query.includes(
    "소아",
  )
    ? [
        { name: "해맑은 소아청소년과", category: "소아과" },
        { name: "튼튼 소아과의원", category: "소아과" },
        { name: "스마일 키즈의원", category: "소아과" },
      ]
    : [
        { name: "아이랑 카페", category: "아이 동반 카페" },
        { name: "맘스키친", category: "아이 동반 카페" },
        { name: "키즈프렌들리", category: "아이 동반 카페" },
      ];

  return centers.map((c, i) => {
    const dLat = (Math.cos(i * 2) * 0.004) / 1.0; // ~400m
    const dLng = (Math.sin(i * 2) * 0.004) / 1.0; // ~400m
    return {
      id: `${c.category}-${i}`,
      name: c.name,
      category: c.category,
      address: undefined,
      lat: lat + dLat,
      lng: lng + dLng,
    };
  });
}

export async function GET(req: NextRequest) {
  const query = (req.nextUrl.searchParams.get("q") || "").trim();
  const lat = parseFloat(req.nextUrl.searchParams.get("lat") || "NaN");
  const lng = parseFloat(req.nextUrl.searchParams.get("lng") || "NaN");

  if (!query) {
    return NextResponse.json(
      { error: "q is required (검색어)" },
      { status: 400 },
    );
  }
  if (Number.isNaN(lat) || Number.isNaN(lng)) {
    return NextResponse.json(
      { error: "lat,lng are required" },
      { status: 400 },
    );
  }

  // TODO: Replace with real Naver Local/Place API integration when keys ready.
  // For now, provide nearby stub data so the UI flows can be validated.
  const results = stubPlaces(query, lat, lng);
  return NextResponse.json({ results });
}
