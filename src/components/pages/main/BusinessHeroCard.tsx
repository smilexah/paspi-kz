"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import {Badge} from "@/components/pages/main/Badge";

export type BusinessHeroCard = {
    title: string;             // "Kaspi Pay. Приложение для бизнеса"
    description: string;       // "Принимайте оплату с"
    badges: { label: string; bg: string }[]; // кнопочки GOLD/RED/KREDIT
    ctaText: string;           // "Подключиться"
    ctaHref: string;
    appIconSrc: string;        // иконка слева сверху (круглая сер/чёрная)
    phoneMockSrc: string;      // скриншот приложения (iPhone mock)
};

export function BusinessHeroCard({
                                     title,
                                     description,
                                     badges,
                                     ctaText,
                                     ctaHref,
                                     appIconSrc,
                                     phoneMockSrc,
                                 }: BusinessHeroCard) {
    return (
        <div
            className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-6 rounded-2xl bg-white p-6 ring-1 ring-gray-200 shadow-sm">
            <div>
                <div className="mb-4 inline-grid h-10 w-10 place-items-center rounded-xl bg-gray-700/10">
                    <Image src={appIconSrc} alt="" width={24} height={24} className="opacity-80"/>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 leading-tight">{title}</h3>
                <p className="mt-4 text-gray-600">{description}</p>

                <div className="mt-3 flex flex-wrap gap-3">
                    {badges.map((b, i) => (
                        <Badge key={i} bg={b.bg}>
                            {b.label}
                        </Badge>
                    ))}
                </div>

                <Link
                    href={ctaHref}
                    className="mt-6 inline-flex h-11 items-center justify-center rounded-xl bg-blue-600 px-5 text-white font-semibold hover:bg-blue-700 transition"
                >
                    {ctaText}
                </Link>
            </div>

            <div className="mx-auto md:mx-0">
                <Image
                    src={phoneMockSrc}
                    alt="Скриншот Kaspi Pay"
                    width={300}
                    height={620}
                    className="h-auto w-[260px] md:w-[300px] rounded-[28px] ring-1 ring-black/10"
                    priority
                />
            </div>
        </div>
    );
}
