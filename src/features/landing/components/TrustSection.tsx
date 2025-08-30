import { LANDING_COPY } from "@/constants/copy";
import { MapPin, Users, FileText } from "lucide-react";

// 신뢰 지표 섹션 컴포넌트
export function TrustSection() {
  return (
    <div className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-6 sm:mt-16 sm:max-w-2xl sm:grid-cols-3 sm:gap-8">
      <TrustItem
        icon={<MapPin className="h-5 w-5 text-sky-600 sm:h-6 sm:w-6" />}
        title={LANDING_COPY.trust.map.title}
        desc={LANDING_COPY.trust.map.desc}
      />
      <TrustItem
        icon={<FileText className="h-5 w-5 text-sky-600 sm:h-6 sm:w-6" />}
        title={LANDING_COPY.trust.policy.title}
        desc={LANDING_COPY.trust.policy.desc}
      />
      <TrustItem
        icon={<Users className="h-5 w-5 text-sky-600 sm:h-6 sm:w-6" />}
        title={LANDING_COPY.trust.community.title}
        desc={LANDING_COPY.trust.community.desc}
      />
    </div>
  );
}

// 신뢰 지표 아이템 컴포넌트
function TrustItem({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 sm:mb-3 sm:h-12 sm:w-12">
        {icon}
      </div>
      <h3 className="mb-1 text-sm font-semibold text-gray-900 sm:text-base">
        {title}
      </h3>
      <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">{desc}</p>
    </div>
  );
}
