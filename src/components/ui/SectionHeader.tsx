"use client";

interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  body?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  heading,
  body,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  const textColor = light ? "text-ivory" : "text-navy";
  const bodyColor = light ? "text-ivory/75" : "text-muted";

  return (
    <div className={`flex flex-col gap-4 ${alignClass}`}>
      {eyebrow && (
        <span
          className={`text-xs font-sans font-semibold tracking-[0.2em] uppercase ${
            light ? "text-champagne" : "text-teal"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <span className="divider-champagne" />
      <h2
        className={`font-serif text-3xl md:text-4xl lg:text-5xl leading-tight ${textColor}`}
      >
        {heading}
      </h2>
      {body && (
        <p className={`max-w-2xl text-base md:text-lg leading-relaxed font-sans ${bodyColor}`}>
          {body}
        </p>
      )}
    </div>
  );
}
