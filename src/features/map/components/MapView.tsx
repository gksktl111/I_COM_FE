import { NaverMap } from "./NaverMap";
import type { Place } from "@/features/map/types/place";

export function MapView({
  places = [],
  focus,
}: {
  places?: Place[];
  focus?: { lat: number; lng: number };
}) {
  return (
    <div className="h-screen w-full">
      <NaverMap places={places} focus={focus} />
    </div>
  );
}
