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
                      className = "",
                  }: {
    children: React.ReactNode;
    href?: string;
    className?: string;
}) {
    return (
        <Link
            href={href}
            className={`block text-[14px] leading-[18px] text-[#000] ${className}`}
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
        <header className="flex flex-col sticky top-0 z-50 bg-white">
            <nav className="min-h-[48px] sm:min-h-[54px] md:min-h-[60px] w-full flex items-center bg-white relative">
                <Container className="flex items-center justify-between relative">
                    <Link href="/" className="shrink-0">
                        <Image
                            src="/logo.svg"
                            alt="Kaspi.kz"
                            width={141}
                            height={33}
                            className="h-[33px] w-[141px] object-contain"
                        />
                    </Link>

                    <div className="flex items-center gap-10 md:gap-13">
                        <div
                            className="relative"
                            onMouseEnter={() => openMenu("clients")}
                            onMouseLeave={scheduleClose}
                        >
                            <button
                                className={
                                    "text-[17px] transition " +
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
                                    "text-[17px] transition " +
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
                                    "text-[17px] transition " +
                                    (open === "guide"
                                        ? "text-black"
                                        : "text-[#0006] hover:text-black")
                                }
                            >
                                Kaspi Гид
                            </button>
                        </div>
                    </div>

                    <LangSwitcher />

                    {open && (
                        <div
                            onMouseEnter={() => {
                                if (closeTimer.current) {
                                    clearTimeout(closeTimer.current);
                                    closeTimer.current = null;
                                }
                            }}
                            onMouseLeave={scheduleClose}
                            className={ // -translate-x-1/2
                                "absolute top-[calc(100%+20px)] z-50 animate-[rotateMenu_.35s_both] " +
                                (open === "guide"
                                    ? "w-[195px] left-[calc(50%+100px)]"
                                    : "w-[650px] left-[calc(50%-270px)]")
                            }
                        >
                            <div className="bg-white rounded-[16px] shadow-[0_.20833vw_1.04167vw_#00000014] py-[36px] px-[60px]">
                                {open === "clients" && (
                                    <div className="w-full flex">
                                        <div className="flex flex-col gap-6 flex-1">
                                            <h4 className="font-semibold text-black">
                                                Продукты Kaspi.kz
                                            </h4>
                                            <div className="flex flex-col gap-5">
                                                {CLIENTS_LEFT.map((t) => (
                                                    <MenuLink key={t}>{t}</MenuLink>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-6 flex-1">
                                            <h4 className="font-semibold text-black">
                                                Сервисы Kaspi.kz
                                            </h4>
                                            <div className="flex flex-col gap-5">
                                                {CLIENTS_RIGHT.map((t) => (
                                                    <MenuLink key={t}>{t}</MenuLink>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {open === "business" && (
                                    <div className="w-full flex justify-center">
                                        <div className="flex flex-col gap-5 flex-1">
                                            {BUSINESS_LEFT.map((t) => (
                                                <MenuLink key={t}>{t}</MenuLink>
                                            ))}
                                        </div>
                                        <div className="flex flex-col gap-5 flex-1">
                                            {BUSINESS_RIGHT.map((t) => (
                                                <MenuLink key={t}>{t}</MenuLink>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {open === "guide" && (
                                    <div className="w-full flex justify-center">
                                        <div className="flex flex-col gap-5">
                                            <MenuLink className="text-start" href="/guide/clients">Клиентам</MenuLink>
                                            <MenuLink className="text-start" href="/guide/business">Бизнесу</MenuLink>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </Container>
            </nav>

            <style jsx>{`
                @keyframes rotateMenu {
                    0% {
                        opacity: 0;
                    }
                    100% {
                        opacity: 1;
                    }
                }
            `}</style>
        </header>
    );
};
