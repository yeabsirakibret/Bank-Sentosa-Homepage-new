import React from "react";

interface BannerProps {
  imageSrc: string;
  altText: string;
  heading: string;
  subheading: string;
  objectPosition?: string;
  align?: "left" | "center" | "right";
  ctaText?: string;
  onCtaClick?: () => void;
}

const Banner = ({
  imageSrc,
  altText,
  heading,
  subheading,
  objectPosition = "object-top",
  align = "left",
  ctaText,
  onCtaClick,
}: BannerProps) => {
  const alignmentClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  return (
    <div className="relative w-full h-64 md:h-[80vh] max-h-[800px] bg-gray-200 overflow-hidden rounded-lg shadow-md">
      <img
        src={imageSrc}
        alt={altText}
        className={`absolute inset-0 w-full h-full object-cover ${objectPosition}`}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />

      {/* Content */}
      <div
        className={`relative z-20 flex flex-col justify-end h-full p-6 md:p-12 ${alignmentClasses[align]}`}
      >
        <div className="text-white space-y-4 max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold drop-shadow-md">
            {heading}
          </h1>
          <p className="text-lg md:text-2xl drop-shadow-sm">{subheading}</p>

          {ctaText && (
            <button
              onClick={onCtaClick}
              className="mt-4 inline-block px-6 py-2 bg-white/90 text-black font-medium rounded hover:bg-white transition duration-200"
            >
              {ctaText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
