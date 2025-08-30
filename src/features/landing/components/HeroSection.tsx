import { LANDING_COPY } from "@/constants/copy";

// 히어로 섹션 컴포넌트 (제목과 부제목)
export function HeroSection() {
  return (
    <div className="mb-8 text-center sm:mb-10 lg:mb-12">
      <h1 className="mb-4 text-2xl leading-tight font-bold text-balance text-gray-900 sm:mb-6 sm:text-3xl lg:text-4xl">
        {LANDING_COPY.titleLead}{" "}
        <span className="text-sky-600">{LANDING_COPY.titleEmph}</span>
      </h1>

      <p className="mx-auto max-w-xs text-base leading-relaxed text-pretty text-gray-600 sm:max-w-xl sm:text-lg lg:max-w-2xl">
        {LANDING_COPY.subtitle}
      </p>
    </div>
  );
}
