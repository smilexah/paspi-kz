import {Locale, routing} from "@/i18n/routing";
import type {Metadata} from "next";
import {NextIntlClientProvider} from "next-intl";
import {getMessages} from "next-intl/server";
import {notFound} from "next/navigation";
import "./globals.css";
import React from "react";
import {Header} from "@/components/shared/header";
import {Footer} from "@/components/shared/footer";

export const metadata: Metadata = {
    title: "Kaspi.kz",
    description: "Покупка в кредит, Оплата услуг, Kaspi Bank, Переводы и конвертация, Выписка по картам, Остаток на депозите, Задолженность по кредиту, Покупки в рассрочку, Kaspi Бонус, Вопросы и ответы",
    keywords: ["Kaspi Bank", "Каспи Банк", "Kaspi Магазин", "рассрочка", "покупки", "Платежи", "Kaspi Кошелек", "Kaspi Бонус", "Кредит Наличными", "Товарный кредит", "Kaspi Депозит", "Кредитная Карта", "Kaspi Gold", "Kaspi Red", "Kaspi Гид", "вопросы", "ответы"],
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
        <head>
            <title>Kaspi.kz – Магазин, Платежи, Мой Банк, Переводы, Red, Бонусы, Гид</title>
            <link rel="icon" type="image/png" href="/favicons/favicon-96x96.png" sizes="96x96" />
            <link rel="icon" type="image/svg+xml" href="/favicons/favicon.svg" />
            <link rel="shortcut icon" href="/favicons/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
            <meta name="apple-mobile-web-app-title" content="Paspi.kz" />
            <link rel="manifest" href="/favicons/site.webmanifest" />
        </head>
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