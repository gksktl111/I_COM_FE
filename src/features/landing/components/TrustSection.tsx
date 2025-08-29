import { MapPin, Users, FileText } from "lucide-react";
import { LANDING_COPY } from "@/constants/copy";

// 신뢰 지표 섹션 컴포넌트
export function TrustSection() {
  return (
    <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-sm sm:max-w-2xl mx-auto">
      <TrustItem
        icon={<MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-sky-600" />}
        title={LANDING_COPY.trust.map.title}
        desc={LANDING_COPY.trust.map.desc}
      />
      <TrustItem
        icon={<FileText className="w-5 h-5 sm:w-6 sm:h-6 text-sky-600" />}
        title={LANDING_COPY.trust.policy.title}
        desc={LANDING_COPY.trust.policy.desc}
      />
      <TrustItem
        icon={<Users className="w-5 h-5 sm:w-6 sm:h-6 text-sky-600" />}
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
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
        {icon}
      </div>
      <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
        {title}
      </h3>
      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}
