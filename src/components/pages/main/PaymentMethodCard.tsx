"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export type PaymentMethodCardProps = {
    title: string;        // Smart POS / Мобильный POS / QR Дисплей
    imageSrc: string;     // путь к картинке устройства
    href: string;         // ссылка под карточкой
    cta?: string;         // текст ссылки (по умолчанию: "Принимать оплату с Kaspi Pay")
    className?: string;
};

export function PaymentMethodCard({
                                      title,
                                      imageSrc,
                                      href,
                                      cta = "Принимать оплату с Kaspi Pay",
                                      className = "",
                                  }: PaymentMethodCardProps) {
    return (
        <div className={["flex flex-col items-center text-center", className].join(" ")}>
            <div className="relative h-44 w-full max-w-[260px]">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-contain drop-shadow"
                    sizes="(max-width: 768px) 260px, 320px"
                    priority={false}
                />
            </div>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">{title}</h3>

            <Link
                href={href}
                className="mt-4 text-blue-600 text-sm font-medium hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            >
                {cta}
            </Link>
        </div>
    );
}
