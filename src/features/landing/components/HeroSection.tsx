import { LANDING_COPY } from "@/constants/copy";

// 히어로 섹션 컴포넌트 (제목과 부제목)
export function HeroSection() {
  return (
    <div className="text-center mb-8 sm:mb-10 lg:mb-12">
      <h1 className="text-balance text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
        {LANDING_COPY.titleLead}{" "}
        <span className="text-sky-600">{LANDING_COPY.titleEmph}</span>
      </h1>

      <p className="text-pretty text-base sm:text-lg text-gray-600 max-w-xs sm:max-w-xl lg:max-w-2xl mx-auto leading-relaxed">
        {LANDING_COPY.subtitle}
      </p>
    </div>
  );
}
