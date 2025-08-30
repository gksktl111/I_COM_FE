import { NextRequest, NextResponse } from "next/server";

const BASE = "https://maps.apigw.ntruss.com/map-reversegeocode/v2/gc";

export async function GET(req: NextRequest) {
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

  const data = await r.json();

  // 안전 파싱: 가장 “사람이 읽기 좋은” 주소 한 개만 뽑아 반환
  const best = data?.results?.[0] ?? null;

  const toText = (node: any) => {
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

  return NextResponse.json({ address, raw: data }, { status: r.status });
}
