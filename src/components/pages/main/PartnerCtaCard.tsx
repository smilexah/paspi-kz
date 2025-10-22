"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import * as React from "react";
import {useTranslations} from "next-intl";

export type PartnerCtaCardProps = {
    title: string;            // "Продавать в Интернет-магазине на Kaspi.kz"
    description: string;      // многострочный текст
    href: string;             // ссылка внизу
    linkText?: string;        // текст ссылки
    iconSrc: string;          // иконка справа
    iconBg?: string;          // цвет подложки иконки
    className?: string;
};

export function PartnerCtaCard({
                                   title,
                                   description,
                                   href,
                                   linkText,
                                   iconSrc,
                                   iconBg = "#E5E7EB",
                                   className = "",
                               }: PartnerCtaCardProps) {
    const t = useTranslations();
    const resolvedLinkText = linkText ?? t("Common.more");
    return (
        <div
            className={[
                "grid grid-cols-[1fr_auto] items-center gap-4",
                "rounded-2xl bg-gray-100 p-6",
                "ring-1 ring-gray-200 shadow-sm",
                className,
            ].join(" ")}
        >
            <div>
                <h3 className="text-2xl font-semibold text-gray-900 leading-snug">
                    {title}
                </h3>

                <p className="mt-3 text-gray-700 leading-relaxed">
                    {description}
                </p>

                <Link
                    href={href}
                    className="mt-4 inline-block text-blue-600 text-sm font-medium hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                    {resolvedLinkText}
                </Link>
            </div>

            <div
                className="grid h-14 w-14 place-items-center rounded-xl"
                style={{ backgroundColor: iconBg }}
                aria-hidden
            >
                <Image src={iconSrc} alt="" width={28} height={28} className="object-contain" />
            </div>
        </div>
    );
}
