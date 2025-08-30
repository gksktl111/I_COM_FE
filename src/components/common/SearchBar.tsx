import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Loader2 } from "lucide-react";
import { LANDING_COPY } from "@/constants/copy";
import { cn } from "@/shared/utils/shadcn_utils";
import { useGeolocation } from "@/shared/hooks/useGeolocation";

interface ISearchBarProps {
  className?: string;
  currentLocation?: boolean;
}

export function SearchBar({
  className,
  currentLocation = true,
}: ISearchBarProps) {
  const { fetchLocation, address, locating, resolving } = useGeolocation({
    auto: false,
  });

  const label = locating
    ? "현재 위치 확인 중…"
    : resolving
      ? "주소 변환 중…"
      : address || "현재 위치";

  console.log("address:", address);

  return (
    <div
      className={cn(
        "mx-auto flex w-full max-w-xl items-center gap-2",
        className,
      )}
    >
      {currentLocation && (
        <Button
          type="button"
          onClick={fetchLocation}
          className="flex items-center gap-2 rounded-full bg-gray-800 px-4 py-2 text-white hover:bg-gray-700"
        >
          {locating || resolving ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <MapPin className="h-4 w-4" />
          )}
          <span className="line-clamp-1 max-w-[10rem]">{label}</span>
        </Button>
      )}

      <div className="relative flex-1">
        <Input
          type="text"
          placeholder={LANDING_COPY.searchPlaceholder}
          aria-label="장소 또는 키워드 검색"
          className="w-full rounded-full py-5 pr-12"
        />
        <Button
          size="icon"
          className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full border-none bg-transparent hover:bg-gray-100"
        >
          <Search className="h-5 w-5 text-black" />
        </Button>
      </div>
    </div>
  );
}
