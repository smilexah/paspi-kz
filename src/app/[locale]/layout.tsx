import {Locale, routing} from "@/i18n/routing";
import type {Metadata} from "next";
import {NextIntlClientProvider} from "next-intl";
import {getMessages} from "next-intl/server";
import {notFound} from "next/navigation";
import "./globals.css";
import React from "react";
import {Header} from "@/components/header";
import {Footer} from "@/components/footer";

export const metadata: Metadata = {
    title: "Kaspi.kz",
    description: "Kaspi Bank - ведущий банк Казахстана, предлагающий инновационные финансовые решения для частных лиц и бизнеса.",
    keywords: ["Kaspi Bank", "Каспи Банк", "банк", "финансы", "Казахстан", "инновации", "услуги", "кредитование", "инвестиции", "онлайн-банкинг"],
    authors: [{name: "Kaspi Bank", url: "https://kaspi.kz"}],
};

export default async function LocaleLayout({
                                               children,
                                               params,
                                           }: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}>) {
    const {locale} = await params;

    if (!routing.locales.includes(locale as Locale)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <html lang={locale}>
        <body className={`antialiased`}>
        <NextIntlClientProvider messages={messages}>
            <Header/>
            {children}
            <Footer/>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}