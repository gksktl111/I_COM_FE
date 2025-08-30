import { NextRequest, NextResponse } from "next/server";

// Minimal types for Naver Reverse Geocoding response we consume
type RevGeoRegion = {
  area1?: { name?: string };
  area2?: { name?: string };
  area3?: { name?: string };
  area4?: { name?: string };
};
type RevGeoLand = {
  name?: string;
  number?: string;
  addition0?: { value?: string };
  number1?: string;
  number2?: string;
};
type RevGeoResult = { region?: RevGeoRegion; land?: RevGeoLand };
type RevGeoResponse = { results?: RevGeoResult[] };

const BASE = "https://maps.apigw.ntruss.com/map-reversegeocode/v2/gc";

export async function GET(req: NextRequest) {
  // 환경 변수 가드: 서버 키가 없으면 친화적인 에러 반환
  if (!process.env.NCP_API_KEY_ID || !process.env.NCP_API_KEY) {
    return NextResponse.json(
      {
        error:
          "Server keys missing: set NCP_API_KEY_ID and NCP_API_KEY on the server.",
      },
      { status: 500 },
    );
  }
  const lat = req.nextUrl.searchParams.get("lat");
  const lng = req.nextUrl.searchParams.get("lng");
  if (!lat || !lng) {
    return NextResponse.json(
      { error: "lat & lng are required" },
      { status: 400 },
    );
  }

  const url = `${BASE}?coords=${encodeURIComponent(
    `${lng},${lat}`,
  )}&orders=roadaddr,addr&output=json`;

  const r = await fetch(url, {
    headers: {
      "x-ncp-apigw-api-key-id": process.env.NCP_API_KEY_ID!,
      "x-ncp-apigw-api-key": process.env.NCP_API_KEY!,
      Accept: "application/json",
    },
    // GET by default
  });

  // 실패 응답이면 에러 전달
  if (!r.ok) {
    let payload: unknown = null;
    try {
      payload = await r.json();
    } catch {}
    return NextResponse.json(
      { error: "Reverse geocoding failed", raw: payload },
      { status: r.status },
    );
  }

  const data = (await r.json()) as unknown;

  // 안전 파싱: 가장 “사람이 읽기 좋은” 주소 한 개만 뽑아 반환
  const best: RevGeoResult | null =
    (data as RevGeoResponse)?.results?.[0] ?? null;

  const toText = (node: RevGeoResult | null): string | null => {
    if (!node) return null;
    const { region, land } = node;
    const a1 = region?.area1?.name ?? "";
    const a2 = region?.area2?.name ?? "";
    const a3 = region?.area3?.name ?? "";
    const a4 = region?.area4?.name ?? "";
    const road =
      land?.name && land?.number
        ? `${land.name} ${land.number}${land.addition0?.value ? " " + land.addition0.value : ""}`
        : "";
    const jibun = land?.number1
      ? `${land?.name ?? ""} ${land.number1}${land.number2 ? "-" + land.number2 : ""}`
      : "";
    // roadaddr 우선, 없으면 지번
    const detail = road || jibun;
    return [a1, a2, a3, a4, detail]
      .filter(Boolean)
      .join(" ")
      .replace(/\s+/g, " ")
      .trim();
  };

  const address = toText(best);
  // 동/읍/면 명칭(법정동/행정동 수준). area3가 기본, 없으면 area4(리) 보조
  const emd = best?.region?.area3?.name ?? best?.region?.area4?.name ?? null;

  return NextResponse.json({ address, emd, raw: data }, { status: r.status });
}
