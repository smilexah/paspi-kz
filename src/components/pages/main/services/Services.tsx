"use client";

import React from "react";
import {ServiceT} from "@/types/service.t";
import {Card} from "@/ui/card";

const ITEMS: ServiceT[] = [
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
        href: "https://kaspi.kz/transfers",
        name: "Переводы",
        description: "Без комиссий\nна Kaspi Gold",
        img: "/services/transfers.svg",
        cta: "Совершить перевод"
    },
    {
        href: "#",
        name: "Акции",
        description: "Получайте\nБонусы\nи покупайте\nв рассрочку",
        img: "/services/actions.svg",
        cta: "Узнать об акциях",
        className: "invoke-actions"
    },
    {
        href: "/payments",
        name: "Платежи",
        description: "Без комиссий,\nболее 10 000 услуг",
        img: "/services/payments.svg",
        cta: "Оплатить услуги"
    },
    {
        href: "#",
        name: "Объявления",
        description: "Бесплатные объявления\nтоваров и услуг",
        img: "/services/ads.svg",
        cta: "Подать объявление",
        className: "invoke-ads"
    },
    {
        href: "#",
        name: "Мой Банк",
        description: "Kaspi Red,\nДепозиты и кредиты\nонлайн",
        img: "/services/mybank.svg",
        cta: "Перейти в Мой Банк",
        className: "invoke-mybank"
    },
    {
        href: "#",
        name: "Госуслуги",
        description: "Оформления онлайн,\nбез визита в ЦОН",
        img: "/services/govservice.svg",
        cta: "Оформить",
        className: "invoke-gos"
    },
    {
        href: "https://guide.kaspi.kz/client/ru",
        name: "Гид",
        description: "Расскажем всё\nо продуктах и сервисах",
        img: "/services/guide.svg",
        cta: "Узнать"
    },
];


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
        </section>
    );
};
