"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/container";
import LangSwitcher from "@/components/header/LangSwitcher";
import React, { useRef, useState } from "react";

type MenuKey = "clients" | "business" | "guide" | null;

const CLIENTS_LEFT = [
    "Kaspi Gold",
    "Kaspi Gold для ребенка",
    "Kaspi Red",
    "Kaspi Депозит",
    "Накопительный Депозит",
    "Кредит на Покупки",
    "Рассрочка",
    "Кредит для ИП",
    "Кредит Наличными",
    "Автокредит на Kolesa.kz",
];

const CLIENTS_RIGHT = [
    "Магазин",
    "Travel",
    "Платежи",
    "Мой банк",
    "Переводы",
    "Акции",
    "Госуслуги",
    "Объявления",
    "Kaspi Гид",
];

const BUSINESS_LEFT = ["Kaspi Pay", "Бизнес Кредит", "Кредит для ИП"];
const BUSINESS_RIGHT = [
    "Продавать в Интернет-магазине на Kaspi.kz",
    "Принимать платежи с Kaspi.kz",
    "Kaspi Гид",
];

function MenuLink({
                      children,
                      href = "#",
                  }: {
    children: React.ReactNode;
    href?: string;
}) {
    return (
        <Link
            href={href}
            className="block text-[13px] md:text-[15px] leading-7 text-[#0006] hover:text-black"
        >
            {children}
        </Link>
    );
}

export const Header = () => {
    const [open, setOpen] = useState<MenuKey>(null);
    const closeTimer = useRef<NodeJS.Timeout | null>(null);

    const openMenu = (key: MenuKey) => {
        if (closeTimer.current) {
            clearTimeout(closeTimer.current);
            closeTimer.current = null;
        }
        setOpen(key);
    };

    const scheduleClose = () => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        closeTimer.current = setTimeout(() => setOpen(null), 120);
    };

    return (
        <header className="flex flex-col">
            <nav className="min-h-[48px] sm:min-h-[54px] md:min-h-[60px] w-full flex items-center bg-white relative">
                <Container className="flex items-center justify-between relative">
                    {/* Лого */}
                    <Link href="/" className="shrink-0">
                        <Image
                            src="/logo.svg"
                            alt="Kaspi.kz"
                            width={141}
                            height={33}
                            className="h-[33px] w-[141px] object-contain"
                        />
                    </Link>

                    {/* Центр: пункты */}
                    <div className="flex items-center gap-10 md:gap-13">
                        <div
                            className="relative"
                            onMouseEnter={() => openMenu("clients")}
                            onMouseLeave={scheduleClose}
                        >
                            <button
                                className={
                                    "text-[13px] transition " +
                                    (open === "clients"
                                        ? "text-black"
                                        : "text-[#0006] hover:text-black")
                                }
                            >
                                Клиентам
                            </button>
                        </div>

                        <div
                            className="relative"
                            onMouseEnter={() => openMenu("business")}
                            onMouseLeave={scheduleClose}
                        >
                            <button
                                className={
                                    "text-[13px] transition " +
                                    (open === "business"
                                        ? "text-black"
                                        : "text-[#0006] hover:text-black")
                                }
                            >
                                Бизнесу
                            </button>
                        </div>

                        <div
                            className="relative hidden sm:block"
                            onMouseEnter={() => openMenu("guide")}
                            onMouseLeave={scheduleClose}
                        >
                            <button
                                className={
                                    "text-[13px] transition " +
                                    (open === "guide"
                                        ? "text-black"
                                        : "text-[#0006] hover:text-black")
                                }
                            >
                                Kaspi Гид
                            </button>
                        </div>
                    </div>

                    {/* Справа: язык */}
                    <LangSwitcher />

                    {/* ЕДИНСТВЕННЫЙ оверлей (контент меняется по open) */}
                    {open && (
                        <div
                            onMouseEnter={() => {
                                if (closeTimer.current) {
                                    clearTimeout(closeTimer.current);
                                    closeTimer.current = null;
                                }
                            }}
                            onMouseLeave={scheduleClose}
                            className={
                                "absolute left-1/2 top-[calc(100%+10px)] -translate-x-1/2 z-50 " +
                                (open === "guide"
                                    ? "w-[220px]"
                                    : "w-[min(92vw,900px)] md:w-[min(92vw,900px)]")
                            }
                        >
                            <div className="bg-white rounded-2xl shadow-xl ring-1 ring-black/5 p-6 md:p-8">
                                {open === "clients" && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                        <div>
                                            <h4 className="font-semibold text-black mb-3">
                                                Продукты Kaspi.kz
                                            </h4>
                                            {CLIENTS_LEFT.map((t) => (
                                                <MenuLink key={t}>{t}</MenuLink>
                                            ))}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-black mb-3">
                                                Сервисы Kaspi.kz
                                            </h4>
                                            {CLIENTS_RIGHT.map((t) => (
                                                <MenuLink key={t}>{t}</MenuLink>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {open === "business" && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                        <div>
                                            <div className="h-6" />
                                            {BUSINESS_LEFT.map((t) => (
                                                <MenuLink key={t}>{t}</MenuLink>
                                            ))}
                                        </div>
                                        <div>
                                            <div className="h-6" />
                                            {BUSINESS_RIGHT.map((t) => (
                                                <MenuLink key={t}>{t}</MenuLink>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {open === "guide" && (
                                    <div className="flex flex-col items-stretch">
                                        <MenuLink>Клиентам</MenuLink>
                                        <MenuLink>Бизнесу</MenuLink>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </Container>
            </nav>
        </header>
    );
};
