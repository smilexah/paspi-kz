"use client";

import {Container} from "@/components/shared/container";
import {Link} from "@/i18n/navigation";
import React from "react";
import {useTranslations} from "next-intl";

const productKeys = [
    "links.products.gold",
    "links.products.goldkid",
    "links.products.red",
    "links.products.deposit",
    "links.products.saveDeposit",
    "links.products.purchaseCredit",
    "links.products.installment",
    "links.products.ipCredit",
    "links.products.cashCredit",
] as const;

const serviceKeys = [
    "links.services.shop",
    "links.services.travel",
    "links.services.payments",
    "links.services.mybank",
    "links.services.transfers",
    "links.services.actions",
    "links.services.egov",
    "links.services.ads",
    "links.services.guide",
] as const;

const businessKeys = [
    "links.business.kaspipay",
    "links.business.businessCredit",
    "links.business.ipCredit",
    "links.business.merchantRegistration",
    "links.business.webpayPartnership",
    "links.business.guide",
    "links.business.partnerCabinet",
] as const;

const miscKeys = [
    "links.misc.hotline9999",
    "links.misc.branches",
    "links.misc.terms",
    "links.misc.jobs",
    "links.misc.investorRelations",
    "links.misc.compliance",
] as const;

const LinkItem = ({children, href = "#"}: { children: React.ReactNode; href?: string }) => (
    <Link
        href={href}
        className="block text-sm text-gray-500 hover:text-gray-900 leading-7"
    >
        {children}
    </Link>
);

const IconWrap = ({children, label}: { children: React.ReactNode; label: string }) => (
    <a
        href="#"
        aria-label={label}
        className="h-8 w-8 grid place-items-center text-gray-500 hover:text-gray-900 transition"
    >
        {children}
    </a>
);

export const Footer = () => {
    const t = useTranslations("Footer");

    return (
        <footer className="w-full">
            <Container>
                <div className="py-10 lg:py-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-3">
                                {t("products")}
                            </h4>
                            <div>
                                {productKeys.map((k) => (
                                    <LinkItem key={k}>{t(k)}</LinkItem>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold text-gray-900 mb-3">
                                {t("services")}
                            </h4>
                            <div>
                                {serviceKeys.map((k) => (
                                    <LinkItem key={k}>{t(k)}</LinkItem>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold text-gray-900 mb-3">{t("forBusiness")}</h4>
                            <div>
                                {businessKeys.map((k) => (
                                    <LinkItem key={k}>{t(k)}</LinkItem>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <h4 className="font-semibold text-gray-900">{t("chatTitle")}</h4>
                                <span
                                    className="px-2.5 py-0.5 text-xs rounded-full bg-gray-100 border border-gray-200 text-gray-700">
                                  {t("chatAction")}
                                </span>
                            </div>
                            <div className="mb-6">
                                {miscKeys.map((k) => (
                                    <LinkItem key={k}>{t(k)}</LinkItem>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t py-6 text-sm text-gray-500">
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                        <div className="flex-1">
                            <p>{t("legal.copyright")}</p>
                            <p className="mt-3 leading-6">
                                {t("legal.license")}
                            </p>
                            <p className="mt-2">
                                <Link href="#"
                                      className="hover:text-gray-900 underline decoration-transparent hover:decoration-gray-300">
                                    {t("legal.corporateSite")}
                                </Link>
                            </p>
                        </div>

                        <div className="hidden lg:flex items-start gap-3">
                            <IconWrap label="Instagram">
                                <svg width="24" height="25" viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 6.84985V18.5388C2 20.8339 3.86047 22.6943 6.15552 22.6943H17.8445C20.1395 22.6943 22 20.8339 22 18.5388V6.84985C22 4.55481 20.1395 2.69434 17.8445 2.69434H6.15552C3.86047 2.69434 2 4.55481 2 6.84985ZM14.1185 18.3611C9.18555 20.0631 4.63123 15.5088 6.33325 10.5758C6.90674 8.91321 8.21875 7.60107 9.88135 7.02759C14.8145 5.32556 19.3688 9.87988 17.6667 14.813C17.0933 16.4756 15.7812 17.7876 14.1185 18.3611ZM18.9398 6.64673C18.8613 7.05774 18.5212 7.29688 18.1694 7.29688C17.9553 7.29688 17.7371 7.2085 17.5699 7.01672C17.5552 6.99976 17.5414 6.98157 17.5292 6.96265C17.3567 6.69897 17.3513 6.38574 17.4979 6.13171C17.6017 5.9519 17.7692 5.82349 17.9697 5.76978C18.17 5.71582 18.3795 5.74353 18.5591 5.84741C18.8132 5.9939 18.9651 6.26794 18.9478 6.58215C18.9465 6.60364 18.944 6.62549 18.9398 6.64673Z"></path>
                                    <path d="M12 7.83569C9.3208 7.83569 7.14136 10.0151 7.14136 12.6943C7.14136 15.3735 9.3208 17.553 12 17.553C14.6792 17.553 16.8586 15.3735 16.8586 12.6943C16.8586 10.0151 14.6792 7.83569 12 7.83569Z"></path>
                                </svg>
                            </IconWrap>
                            <IconWrap label="YouTube">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <rect x="3" y="7" width="18" height="10" rx="3" stroke="currentColor"/>
                                    <path d="M11 10l5 2-5 2v-4z" fill="currentColor"/>
                                </svg>
                            </IconWrap>
                            <IconWrap label="TikTok">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M14 5c1.2 1.8 2.6 3 5 3v3c-2.5 0-4.4-1-5-2v6.5A4.5 4.5 0 119.5 11h2A2.5 2.5 0 1014 13V5z"
                                        stroke="currentColor" strokeLinejoin="round"/>
                                </svg>
                            </IconWrap>
                            <IconWrap label="Telegram">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 4L3 11l6 2 2 6 3-4 5-11z" stroke="currentColor"/>
                                </svg>
                            </IconWrap>
                            <IconWrap label="Facebook">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <path d="M14 8h3V5h-3a4 4 0 00-4 4v3H7v3h3v6h3v-6h3l1-3h-4V9a1 1 0 011-1z"
                                          stroke="currentColor"/>
                                </svg>
                            </IconWrap>
                            <IconWrap label="VK">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <path d="M3 7h3l2 4 2-4h3l-3 5 3 5h-3l-2-4-2 4H3l3-5L3 7z" stroke="currentColor"/>
                                </svg>
                            </IconWrap>
                            <IconWrap label="OK">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="7" r="3" stroke="currentColor"/>
                                    <path d="M7 15a8 8 0 0010 0M9 18l3-2 3 2" stroke="currentColor"/>
                                </svg>
                            </IconWrap>
                            <IconWrap label="LinkedIn">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <rect x="4" y="9" width="4" height="11" stroke="currentColor"/>
                                    <rect x="4" y="4" width="4" height="3" stroke="currentColor"/>
                                    <path d="M12 20v-7a3 3 0 016 0v7" stroke="currentColor"/>
                                </svg>
                            </IconWrap>
                            <IconWrap label="WhatsApp">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <path d="M20 12a8 8 0 10-3.1 6.3L17 21l.7-2.8A8 8 0 0020 12z"
                                          stroke="currentColor"/>
                                    <path d="M8.5 9.5c.5 2 2.5 4 4.5 4.5l1.2-1.2" stroke="currentColor"/>
                                </svg>
                            </IconWrap>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
