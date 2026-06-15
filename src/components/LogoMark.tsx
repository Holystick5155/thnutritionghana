import { useState } from "react";
import tbngLogo from "@assets/tbng-logo.png";
import tbngLogoWhite from "@assets/tbng-logo-w.png";

interface LogoMarkProps {
  dark?: boolean;
  size?: number;
}

export default function LogoMark({ dark = false, size = 48 }: LogoMarkProps) {
  const [imgError, setImgError] = useState(false);

  if (!imgError) {
    return (
      <img
        src={dark ? tbngLogoWhite : tbngLogo}
        alt="TB Nutrition Ghana"
        width={size}
        // height={size}
        className="object-contain"
        style={{ width: size, height: "auto" }} //  style={{ width: size, height: size }}
        onError={() => setImgError(true)}
      />
    );
  }

  return (
    <div
      style={{ width: size, height: size }}
      className={`border-2 border-dashed rounded flex items-center justify-center flex-shrink-0 ${
        dark ? "bg-white/10 border-white/20" : "bg-primary/10 border-primary/20"
      }`}
    >
      <span
        className={`text-[10px] font-bold tracking-tighter text-center leading-tight ${
          dark ? "text-white" : "text-primary"
        }`}
      >
        LOGO
        <br />
        HERE
      </span>
    </div>
  );
}
