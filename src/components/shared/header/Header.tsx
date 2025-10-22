"use client";

import Image from "next/image";
import { Link, usePathname } from "@/i18n/navigation";
import { Container } from "@/components/shared/container";
import LangSwitcher from "@/components/shared/header/LangSwitcher";
import React, { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";

type MenuKey = "clients" | "business" | "guide" | null;

type MenuItem = {
    key: string;
    href: string;
    className?: string;
};

const CLIENTS_LEFT: MenuItem[] = [
    { key: "menu.clientsLeft.gold", href: "/gold" },
    { key: "menu.clientsLeft.goldkid", href: "/goldkid" },
    { key: "menu.clientsLeft.red", href: "https://kaspi.kz/kaspired" },
    { key: "menu.clientsLeft.deposit", href: "https://kaspi.kz/deposit" },
    { key: "menu.clientsLeft.saveDeposit", href: "https://kaspi.kz/savedeposit" },
    { key: "menu.clientsLeft.purchaseCredit", href: "https://kaspi.kz/purchase" },
    { key: "menu.clientsLeft.installment", href: "https://kaspi.kz/installment" },
    { key: "menu.clientsLeft.ipCredit", href: "https://kaspi.kz/cashkreditbiz" },
    { key: "menu.clientsLeft.cashCredit", href: "https://kaspi.kz/cashkredit" },
    { key: "menu.clientsLeft.autoCredit", href: "https://kaspi.kz/carcredit" },
];

const CLIENTS_RIGHT: MenuItem[] = [
    { key: "menu.clientsRight.shop", href: "/shop" },
    { key: "menu.clientsRight.travel", href: "/kaspitravel" },
    { key: "menu.clientsRight.payments", href: "/payments" },
    { key: "menu.clientsRight.mybank", href: "#", className: "invoke-mybank" },
    { key: "menu.clientsRight.transfers", href: "https://kaspi.kz/transfers" },
    { key: "menu.clientsRight.actions", href: "#", className: "invoke-actions" },
    { key: "menu.clientsRight.egov", href: "#", className: "invoke-gos" },
    { key: "menu.clientsRight.ads", href: "#", className: "invoke-ads" },
    { key: "menu.clientsRight.guide", href: "https://guide.kaspi.kz/client/ru" },
];

const BUSINESS_LEFT: MenuItem[] = [
    { key: "menu.businessLeft.kaspipay", href: "/kaspipay" },
    { key: "menu.businessLeft.businessCredit", href: "/business-credit" },
    { key: "menu.businessLeft.ipCredit", href: "/cash-credit-business" },
];

const BUSINESS_RIGHT: MenuItem[] = [
    { key: "menu.businessRight.merchantRegistration", href: "/shop/merchant/registration" },
    { key: "menu.businessRight.webpayPartnership", href: "https://kaspi.kz/webpay/partnership" },
    { key: "menu.businessRight.guide", href: "https://guide.kaspi.kz/partner/ru" },
];

function MenuLink({
                      children,
                      href = "#",
                      className = "",
                      active = false,
                  }: {
    children: React.ReactNode;
    href?: string;
    className?: string;
    active?: boolean;
}) {
    const pathname = usePathname();
    const isActive = active || pathname === href || (href !== "#" && href !== "/" && pathname.startsWith(href));

    return (
        <Link
            href={href}
            className={`block text-[14px] leading-[18px] transition-colors ${
                isActive 
                    ? "text-[#0006] font-medium" 
                    : "text-[#1f1f1f] hover:text-[#0006]"
            } ${className}`}
        >
            {children}
        </Link>
    );
}

export const Header = () => {
    const [open, setOpen] = useState<MenuKey>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const closeTimer = useRef<NodeJS.Timeout | null>(null);
    const pathname = usePathname();
    const t = useTranslations("Header");

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (!mobileOpen) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setMobileOpen(false);
        };
        window.addEventListener("keydown", onKeyDown);

        return () => {
            window.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = prev;
        };
    }, [mobileOpen]);

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

    const isMenuSectionActive = (menuKey: MenuKey) => {
        if (menuKey === "clients") {
            return [...CLIENTS_LEFT, ...CLIENTS_RIGHT].some(item =>
                item.href !== "#" && item.href !== "/" && pathname.startsWith(item.href)
            );
        }
        if (menuKey === "business") {
            return [...BUSINESS_LEFT, ...BUSINESS_RIGHT].some(item =>
                item.href !== "#" && item.href !== "/" && pathname.startsWith(item.href)
            );
        }
        if (menuKey === "guide") {
            return pathname.includes("guide");
        }
        return false;
    };

    return (
        <header className="flex flex-col sticky top-0 z-50 bg-white">
            <nav className="h-[56px] sm:h-[60px] md:h-[60px] w-full flex items-center bg-white relative border-b border-gray-200">
                <Container className="flex items-center justify-between relative" pxClass="px-3 sm:px-4 md:px-8 lg:px-12 xl:px-16">
                    <Link href="/" className="shrink-0">
                        <Image
                            src="/logo.svg"
                            alt="Kaspi.kz"
                            width={141}
                            height={33}
                            className="h-[33px] w-[141px] object-contain"
                        />
                    </Link>

                    <div className="hidden md:flex items-center gap-6 sm:gap-8 md:gap-10">
                        <div
                            className="relative"
                            onMouseEnter={() => openMenu("clients")}
                            onMouseLeave={scheduleClose}
                        >
                            <button
                                className={
                                    "text-[17px] transition " +
                                    (open === "clients" || isMenuSectionActive("clients")
                                        ? "text-[#1f1f1f] font-medium"
                                        : "text-[#0006] hover:text-[#1f1f1f]")
                                }
                            >
                                {t("clients")}
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
                                    (open === "business" || isMenuSectionActive("business")
                                        ? "text-black font-medium"
                                        : "text-[#0006] hover:text-black")
                                }
                            >
                                {t("business")}
                            </button>
                        </div>

                        <div
                            className="relative hidden lg:block"
                            onMouseEnter={() => openMenu("guide")}
                            onMouseLeave={scheduleClose}
                        >
                            <button
                                className={
                                    "text-[17px] transition " +
                                    (open === "guide" || isMenuSectionActive("guide")
                                        ? "text-black font-medium"
                                        : "text-[#0006] hover:text-black")
                                }
                            >
                                {t("guide")}
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div>
                            <LangSwitcher />
                        </div>

                        <button
                            aria-label="Open menu"
                            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50"
                            onClick={() => setMobileOpen(true)}
                        >
                            <MenuIcon size={20} />
                        </button>
                    </div>

                    {mobileOpen && (
                        <>
                            <div
                                className="fixed inset-0 bg-black/40 z-[100]"
                                aria-hidden="true"
                                onClick={() => setMobileOpen(false)}
                            />
                            <div
                                className="fixed inset-0 z-[101] bg-white flex flex-col"
                                role="dialog"
                                aria-modal="true"
                                aria-label="Mobile menu"
                            >
                                <div className="h-[56px] sm:h-[60px] md:h-[60px] px-3 sm:px-4 flex items-center justify-between border-b border-gray-200">
                                    <Link href="/" className="shrink-0" aria-label="Home" onClick={() => setMobileOpen(false)}>
                                        <Image src="/logo.svg" alt="Kaspi.kz" width={141} height={33} className="h-[33px] w-[141px] object-contain" />
                                    </Link>
                                    <div className="flex items-center gap-2">
                                        <LangSwitcher />
                                        <button
                                            aria-label="Close menu"
                                            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50"
                                            onClick={() => setMobileOpen(false)}
                                        >
                                            <CloseIcon size={20} />
                                        </button>
                                    </div>
                                </div>

                                <div className="flex-1 p-4 space-y-8 overflow-y-auto">
                                    <div>
                                        <h3 className="text-base font-semibold text-gray-900 mb-3">{t("clients")}</h3>
                                        <div className="grid grid-cols-1 gap-2 max-h-60 overflow-y-auto pr-1 overscroll-y-contain">
                                            {CLIENTS_LEFT.map((item) => (
                                                <Link key={item.key} href={item.href} className="text-[15px] text-gray-700 py-2 border-b border-gray-100" onClick={() => setMobileOpen(false)}>
                                                    {t(item.key)}
                                                </Link>
                                            ))}
                                            {CLIENTS_RIGHT.map((item) => (
                                                <Link key={item.key} href={item.href} className="text-[15px] text-gray-700 py-2 border-b border-gray-100" onClick={() => setMobileOpen(false)}>
                                                    {t(item.key)}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-semibold text-gray-900 mb-3">{t("business")}</h3>
                                        <div className="grid grid-cols-1 gap-2 max-h-60 overflow-y-auto pr-1 overscroll-y-contain">
                                            {BUSINESS_LEFT.map((item) => (
                                                <Link key={item.key} href={item.href} className="text-[15px] text-gray-700 py-2 border-b border-gray-100" onClick={() => setMobileOpen(false)}>
                                                    {t(item.key)}
                                                </Link>
                                            ))}
                                            {BUSINESS_RIGHT.map((item) => (
                                                <Link key={item.key} href={item.href} className="text-[15px] text-gray-700 py-2 border-b border-gray-100" onClick={() => setMobileOpen(false)}>
                                                    {t(item.key)}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-semibold text-gray-900 mb-3">{t("guide")}</h3>
                                        <div className="grid grid-cols-1 gap-2 max-h-60 overflow-y-auto pr-1 overscroll-y-contain">
                                            <Link href="https://guide.kaspi.kz/client/ru" className="text-[15px] text-gray-700 py-2 border-b border-gray-100" onClick={() => setMobileOpen(false)}>
                                                {t("clients")}
                                            </Link>
                                            <Link href="https://guide.kaspi.kz/partner/ru" className="text-[15px] text-gray-700 py-2 border-b border-gray-100" onClick={() => setMobileOpen(false)}>
                                                {t("business")}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

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
                                "absolute top-[calc(100%+20px)] z-50 animate-[rotateMenu_.35s_both] hidden md:block " +
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
                                                {t("products")}
                                            </h4>
                                            <div className="flex flex-col gap-5">
                                                {CLIENTS_LEFT.map((item) => (
                                                    <MenuLink key={item.key} href={item.href} className={item.className}>{t(item.key)}</MenuLink>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-6 flex-1">
                                            <h4 className="font-semibold text-black">
                                                {t("services")}
                                            </h4>
                                            <div className="flex flex-col gap-5">
                                                {CLIENTS_RIGHT.map((item) => (
                                                    <MenuLink key={item.key} href={item.href} className={item.className}>{t(item.key)}</MenuLink>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {open === "business" && (
                                    <div className="w-full flex justify-center">
                                        <div className="flex flex-col gap-5 flex-1">
                                            {BUSINESS_LEFT.map((item) => (
                                                <MenuLink key={item.key} href={item.href} className={item.className}>{t(item.key)}</MenuLink>
                                            ))}
                                        </div>
                                        <div className="flex flex-col gap-5 flex-1">
                                            {BUSINESS_RIGHT.map((item) => (
                                                <MenuLink key={item.key} href={item.href} className={item.className}>{t(item.key)}</MenuLink>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {open === "guide" && (
                                    <div className="w-full flex justify-center">
                                        <div className="flex flex-col gap-5">
                                            <MenuLink className="text-start" href="https://guide.kaspi.kz/client/ru">{t("clients")}</MenuLink>
                                            <MenuLink className="text-start" href="https://guide.kaspi.kz/partner/ru">{t("business")}</MenuLink>
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
