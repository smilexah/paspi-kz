"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import {Locale} from "@/i18n/routing";

function stripLeadingLocale(path: string) {
    return path.replace(/^\/(ru|kk)(?=\/|$)/, "") || "/";
}

const base =
    "px-2.5 py-1 rounded-[10px] text-sm border transition cursor-pointer";

export default function LangSwitcher() {
    const pathname = usePathname() || "/";
    const current = useLocale() as Locale;

    // Делаем href "чистым" (без локали), а нужную локаль задаём пропом locale
    const cleanHref = stripLeadingLocale(pathname);

    const Btn = (code: Locale, label: string) => {
        const isActive = current === code;
        return (
            <Link
                key={code}
                href={cleanHref}
                locale={code}
                prefetch={false}
                aria-pressed={isActive}
                className={
                    base +
                    (isActive
                        ? " bg-transparent border-gray-200"
                        : " text-gray-400 hover:text-gray-900 border-transparent")
                }
            >
                {label}
            </Link>
        );
    };

    return (
        <div className="flex items-center">
            {Btn("kk", "Қаз")}
            {Btn("ru", "Рус")}
        </div>
    );
}
