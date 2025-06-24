"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Flag from "react-world-flags";

const languages = [
  { code: "en", flag: "GB" },
  { code: "ru", flag: "RU" },
  { code: "uz", flag: "UZ" },
];

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("en");
  const router = useRouter();
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const locale = document.cookie
      .split("; ")
      .find((row) => row.startsWith("NEXT_LOCALE="))
      ?.split("=")[1];
    if (locale) setLang(locale);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (code: string) => {
    setLang(code);
    setOpen(false);

    const segments = pathname.split("/").filter(Boolean);
    if (segments[0]?.length === 2) segments.shift();
    const newPath = `/${code}/${segments.join("/")}`;
    router.push(newPath);
  };

  return (
    <div ref={ref} style={{ position: "relative", cursor: "pointer" }}>
      <div onClick={() => setOpen((prev) => !prev)}>
        <Flag code={languages.find((l) => l.code === lang)?.flag || "GB"} style={{ width: 30, height: 24 }} />
      </div>
      {open && (
        <div style={{ position: "absolute", top: "100%", marginTop: 4, zIndex: 100 }}>
          {languages.map(({ code, flag }) => (
            <div key={code} onClick={() => handleSelect(code)} style={{ padding: 4 }}>
              <Flag code={flag} style={{ width: 30, height: 24 }} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
