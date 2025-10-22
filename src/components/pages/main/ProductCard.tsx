"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import * as React from "react";
import {useTranslations} from "next-intl";

export type ProductCardProps = {
    title: string;           // Маленький серый заголовок (напр. "Kaspi Gold")
    description: string;     // Основной текст (2–3 строки)
    href: string;            // Куда ведёт кликабельная карточка
    cta?: string;            // Текст ссылки внизу (напр. "Открыть онлайн")
    logoSrc: string;         // Путь к логотипу
    logoBg?: string;         // Цвет фона плашки логотипа (HEX/RGB/HSL) — опционально
    className?: string;
    target?: "_blank";
    rel?: string;
};

export function ProductCard({
                                title,
                                description,
                                href,
                                cta,
                                logoSrc,
                                logoBg = "#F3F4F6",
                                className = "",
                                target,
                                rel,
                            }: ProductCardProps) {
    const t = useTranslations();
    const linkText = cta ?? t("Common.more");
    return (
        <Link
            href={href}
            target={target}
            rel={rel}
            className={[
                // layout
                "group grid grid-cols-[1fr_auto] items-center gap-4",
                "rounded-2xl bg-white p-6",
                // border / shadow
                "ring-1 ring-gray-200 shadow-sm hover:shadow-md",
                // transitions
                "transition-shadow",
                // focus
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
                className,
            ].join(" ")}
            aria-label={`${title}: ${description}`}
        >
            <div className="flex min-w-0 flex-col justify-between">
                <h3 className="text-sm text-gray-600">{title}</h3>
                <p className="mt-2 text-lg font-semibold text-gray-900 leading-snug line-clamp-3">
                    {description}
                </p>
                <span className="mt-3 text-blue-600 text-sm font-medium group-hover:underline">
          {linkText}
        </span>
            </div>

            <div
                className="grid h-16 w-16 shrink-0 place-items-center rounded-xl"
                style={{ backgroundColor: logoBg }}
                aria-hidden
            >
                <Image
                    src={logoSrc}
                    alt="Img"
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain"
                    priority={false}
                />
            </div>
        </Link>
    );
}
