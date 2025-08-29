import { Header } from "@/components/common/Header";
import { MapService } from "@/features/map/components";

// 지도 서비스 페이지
export default function MapPage() {
  return (
    <>
      <Header />
      <MapService />
    </>
  );
}
