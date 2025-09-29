"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

type Service = {
    name: string;
    description: string; // \n = перенос
    img: string;         // путь из /public
    cta: string;
    href?: string;
};

const ITEMS: Service[] = [
    {
        href: "/shop",
        name: "Магазин",
        description: "Покупки\nв рассрочку\nс бесплатной\nдоставкой",
        img: "/services/service-1.svg",
        cta: "Купить"
    },
    {
        href: "/kaspitravel",
        name: "Travel",
        description: "Авиа и ЖД\nБилеты\nпо выгодным\nценам",
        img: "/services/travel-v2.svg",
        cta: "Купить билеты"
    },
    {
        href: "/transfers",
        name: "Переводы",
        description: "Без комиссий\nна Kaspi Gold",
        img: "/services/transfers.svg",
        cta: "Совершить перевод"
    },
    {
        name: "Акции",
        description: "Получайте\nБонусы\nи покупайте\nв рассрочку",
        img: "/services/actions.svg",
        cta: "Узнать об акциях"
    },
    {
        href: "/payments",
        name: "Платежи",
        description: "Без комиссий,\nболее 10 000 услуг",
        img: "/services/payments.svg",
        cta: "Оплатить услуги"
    },
    {
        name: "Объявления",
        description: "Бесплатные объявления\nтоваров и услуг",
        img: "/services/ads.svg",
        cta: "Подать объявление"
    },
    {
        name: "Мой Банк",
        description: "Kaspi Red,\nДепозиты и кредиты\nонлайн",
        img: "/services/mybank.svg",
        cta: "Перейти в Мой Банк"
    },
    {
        name: "Госуслуги",
        description: "Оформления онлайн,\nбез визита в ЦОН",
        img: "/services/govservice.svg",
        cta: "Оформить"
    },
    {
        href: "/guide/ru",
        name: "Гид",
        description: "Расскажем всё\nо продуктах и сервисах",
        img: "/services/guide.svg",
        cta: "Узнать"
    },
];

function Card({item}: { item: Service }) {
    const Action = (
        <span
            className="block w-full text-center rounded-lg bg-[#0089D0] py-2 text-sm font-medium leading-4 text-white">
          {item.cta}
        </span>
    );

    return (
        <div className="h-[268px] w-[215px] shrink-0">
            <div className="group/card flex h-full w-full flex-col gap-4 rounded-2xl bg-white p-5 md:p-6">
                <div className="text-[13px]">{item.name}</div>

                <div className="whitespace-pre-line text-[17px]">{item.description}</div>

                {/* Flex контейнер для медиа-зоны */}
                <div className="flex-1 flex flex-col justify-end relative">
                    <Image
                        src={item.img}
                        alt={item.name}
                        width={214}
                        height={114}
                        className="
                            absolute -bottom-4.5 left-1/2 -translate-x-1/2
                            h-[114px] w-[214px]
                            opacity-100 transition-all duration-200 ease-out
                            group-hover/card:translate-y-1 group-hover/card:opacity-0
                            group-focus-within/card:translate-y-1 group-focus-within/card:opacity-0
                            z-0 object-cover
                        "
                    />

                    {/* Кнопка - флекс позиционирование */}
                    <div className="
                        w-full
                        opacity-0 transition-opacity duration-200 ease-out
                        group-hover/card:pointer-events-auto group-hover/card:opacity-100
                        group-focus-within/card:pointer-events-auto group-focus-within/card:opacity-100
                        z-10
                    ">
                        {item.href ? (
                            <Link href={item.href} aria-label={item.cta} className="block w-full">
                                {Action}
                            </Link>
                        ) : (
                            <button type="button" className="w-full">
                                {Action}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export const Services = () => {
    return (
        <section className="bg-[#f3f3f3] py-10 md:py-14">
            <h2 className="mb-8 text-center text-3xl font-semibold text-gray-900 md:text-5xl">
                Сервисы Kaspi.kz
            </h2>

            <div className="relative">
                <div
                    className="pointer-events-none absolute inset-0 z-10 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"/>
                <div className="overflow-hidden">
                    <div className="flex w-max gap-4 animate-[services-scroll_42s_linear_infinite] hover:[animation-play-state:paused] motion-reduce:animate-none">
                        {[0, 1, 2].map((dup) => (
                            <div className="flex items-stretch gap-4" key={dup}>
                                {ITEMS.map((it, i) => (
                                    <Card key={`${dup}-${i}`} item={it}/>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx global>{`
                @keyframes services-scroll {
                    0% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(-33.333%);
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .motion-reduce\\:animate-none {
                        animation: none !important;
                    }
                }
            `}</style>
        </section>
    );
};
