"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/shared/container";
import LangSwitcher from "@/components/shared/header/LangSwitcher";
import React, { useRef, useState } from "react";

type MenuKey = "clients" | "business" | "guide" | null;

const CLIENTS_LEFT = [
    { text: "Kaspi Gold", href: "/gold" },
    { text: "Kaspi Gold для ребенка", href: "/goldkid" },
    { text: "Kaspi Red", href: "/kaspired" },
    { text: "Kaspi Депозит", href: "/deposit" },
    { text: "Накопительный Депозит", href: "/savedeposit" },
    { text: "Кредит на Покупки", href: "/purchase" },
    { text: "Рассрочка", href: "/installment" },
    { text: "Кредит для ИП", href: "/cashkreditbiz" },
    { text: "Кредит Наличными", href: "/cashkredit" },
    { text: "Автокредит на Kolesa.kz", href: "/carcredit" },
];

const CLIENTS_RIGHT = [
    { text: "Магазин", href: "/shop" },
    { text: "Travel", href: "/kaspitravel" },
    { text: "Платежи", href: "/payments" },
    { text: "Мой банк", href: "#", className: "invoke-mybank" },
    { text: "Переводы", href: "/transfers" },
    { text: "Акции", href: "#", className: "invoke-actions" },
    { text: "Госуслуги", href: "#", className: "invoke-gos" },
    { text: "Объявления", href: "#", className: "invoke-ads" },
    { text: "Kaspi Гид", href: "https://guide.kaspi.kz/client/ru" },
];

const BUSINESS_LEFT = [
    { text: "Kaspi Pay", href: "/kaspipay" },
    { text: "Бизнес Кредит", href: "/bizkredit" },
    { text: "Кредит для ИП", href: "/cashkreditbiz" },
];

const BUSINESS_RIGHT = [
    { text: "Продавать в Интернет-магазине на Kaspi.kz", href: "/shop/merchant/registration/#!/landing" },
    { text: "Принимать платежи с Kaspi.kz", href: "/webpay/partnership" },
    { text: "Kaspi Гид", href: "https://guide.kaspi.kz/partner/ru" },
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
                                                    <MenuLink key={t.text} href={t.href}>{t.text}</MenuLink>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-6 flex-1">
                                            <h4 className="font-semibold text-black">
                                                Сервисы Kaspi.kz
                                            </h4>
                                            <div className="flex flex-col gap-5">
                                                {CLIENTS_RIGHT.map((t) => (
                                                    <MenuLink key={t.text} href={t.href}>{t.text}</MenuLink>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {open === "business" && (
                                    <div className="w-full flex justify-center">
                                        <div className="flex flex-col gap-5 flex-1">
                                            {BUSINESS_LEFT.map((t) => (
                                                <MenuLink key={t.text} href={t.href}>{t.text}</MenuLink>
                                            ))}
                                        </div>
                                        <div className="flex flex-col gap-5 flex-1">
                                            {BUSINESS_RIGHT.map((t) => (
                                                <MenuLink key={t.text} href={t.href}>{t.text}</MenuLink>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {open === "guide" && (
                                    <div className="w-full flex justify-center">
                                        <div className="flex flex-col gap-5">
                                            <MenuLink className="text-start" href="https://guide.kaspi.kz/client/ru">Клиентам</MenuLink>
                                            <MenuLink className="text-start" href="https://guide.kaspi.kz/partner/ru">Бизнесу</MenuLink>
                                        </div>
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
