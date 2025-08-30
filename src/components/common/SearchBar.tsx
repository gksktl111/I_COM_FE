"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Loader2 } from "lucide-react";
import { cn } from "@/shared/utils/shadcn_utils";
import { useGeolocation } from "@/shared/hooks/useGeolocation";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { LANDING_COPY } from "@/constants/copy";

interface ISearchBarProps {
  className?: string;
  currentLocation?: boolean;
  onSearch?: (q: string) => void;
}

export function SearchBar({
  className,
  currentLocation = true,
  onSearch,
}: ISearchBarProps) {
  const router = useRouter();
  const [q, setQ] = useState("");
  const { fetchLocation, address, locating, resolving } = useGeolocation({
    auto: false,
  });

  const label = locating
    ? "현재 위치 확인 중…"
    : resolving
      ? "주소 변환 중…"
      : address || "현재 위치";

  // address 값은 버튼 라벨로만 활용
  const submit = useCallback(() => {
    const query = q.trim();
    if (!query) return;
    if (onSearch) onSearch(query);
    else router.push(`/map?q=${encodeURIComponent(query)}`);
  }, [q, onSearch, router]);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        submit();
      }
    },
    [submit],
  );

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
          className="w-full rounded-full py-5 pr-24"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={onKeyDown}
        />
        <Button
          size="icon"
          className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full border-none bg-transparent hover:bg-gray-100"
          onClick={submit}
        >
          <Search className="h-5 w-5 text-black" />
        </Button>
      </div>
    </div>
  );
}
