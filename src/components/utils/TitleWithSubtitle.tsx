// components/TitleWithSubtitle.tsx

import React from "react";

interface TitleWithSubtitleProps {
  title: string;
  subtitle: string;
  titleClass?: string;
  subtitleClass?: string;
}

const TitleWithSubtitle: React.FC<TitleWithSubtitleProps> = ({
  title,
  subtitle,
  titleClass = "text-[var(--body-color)]",
  subtitleClass = "text-[var(--body-color)]",
}) => {
  return (
    <div className="text-center mx-auto mb-[10px]">
      <p
        className={`text-[#82828a] font-semibold uppercase tracking-[2px] mt-[-6px] mb-[15px] ${subtitleClass}`}
      >
        {subtitle}
      </p>
      <h2
        className={`text-4xl text-secondary-main font-bold mt-[-6px] mb-10 ${titleClass}`}
      >
        {title}
      </h2>
    </div>
  );
};

export default TitleWithSubtitle;
