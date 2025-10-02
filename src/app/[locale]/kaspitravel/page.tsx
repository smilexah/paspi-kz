"use client";

import {useEffect, useState} from "react";
import {Feature, Features} from "@/components/features/Features";
import {Stepper} from "@/components/stepper";
import {QR} from "@/components/QR";
import {Hero} from "@/components/hero";
import {FixedActionBar} from "@/components/fixed-action-bar";
import {PopularRoutes} from "@/components/popular-routes";
import {Partner, PartnersShowCase} from "@/components/partners/Partners";

const color = "#E4573D";

const ArrowSwapIcon: Feature["Icon"] = (props) => (
    <svg viewBox="0 0 64 64" {...props}>
        <circle cx="32" cy="32" r="22" fill="none" stroke={color} strokeWidth="3"/>
        <path
            d="M18 26h20m0 0-4-4m4 4-4 4"
            fill="none"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M46 38H26m0 0 4 4m-4-4 4-4"
            fill="none"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const TIcon: Feature["Icon"] = (props) => (
    <svg viewBox="0 0 64 64" {...props}>
        <circle cx="32" cy="32" r="22" fill="none" stroke={color} strokeWidth="3"/>
        <path
            d="M22 26h20M32 26v16"
            fill="none"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
        />
    </svg>
);

const CartIcon: Feature["Icon"] = (props) => (
    <svg viewBox="0 0 64 64" {...props}>
        <circle cx="32" cy="32" r="22" fill="none" stroke={color} strokeWidth="3"/>
        <path
            d="M22 28h20l-2 10H24l-2-10Z"
            fill="none"
            stroke={color}
            strokeWidth="3"
            strokeLinejoin="round"
        />
        <circle
            cx="26"
            cy="42"
            r="2.5"
            fill="none"
            stroke={color}
            strokeWidth="3"
        />
        <circle
            cx="40"
            cy="42"
            r="2.5"
            fill="none"
            stroke={color}
            strokeWidth="3"
        />
    </svg>
);

const PARTNERS: Partner[] = [
    { name: "Air Astana", logo: "/partners/air-astana.svg" },
    { name: "FlyArystan", logo: "/partners/fly-arystan.svg" },
    { name: "Scat", logo: "/partners/scat.svg" },
    { name: "Turkish Airlines", logo: "/partners/turkish_airlines.svg" },
    { name: "Qazaq Air", logo: "/partners/qazaq-air.svg" },
    { name: "Qatar Airways", logo: "/partners/qatar-airways.svg" },
    { name: "FlyDubai", logo: "/partners/FlyDubai.png" },
    { name: "Pegasus Airlines", logo: "/partners/Pegasus.svg" },
    { name: "Uzbekistan Airways", logo: "/partners/Uzbekistan-Airways.svg" },
    { name: "Lufthansa", logo: "/partners/Lufthansa.png" },
];

const ITEMS: Feature[] = [
    {title: "Тысячи направлений\n по низким ценам", Icon: ArrowSwapIcon},
    {title: "Быстрый возврат\n и обмен", Icon: TIcon},
    {title: "Оплата с Kaspi Gold\n и в кредит", Icon: CartIcon},
];

const steps = [
    {number: 1, text: "Скачайте приложение Kaspi.kz"},
    {
        number: 2, text: "Покупайте Авиа и ЖД\n" +
            "билеты по выгодным\n" +
            "ценам онлайн"
    },
];

export default function KaspiTravelPage() {
    const [showFixedButton, setShowFixedButton] = useState(false);

    useEffect(() => {
        const update = () => {
            const heading = document.getElementById("hero-button");
            if (!heading) return;

            const rect = heading.getBoundingClientRect();
            // Кнопка видна, если hero-button НЕ виден на экране:
            // когда верх заголовка выше верхней границы экрана (прокрутили мимо него)
            setShowFixedButton(rect.top < 0);
        };

        update(); // первичный расчёт на монтировании
        // Дешёвый, но надёжный слушатель: scroll/resize + rAF троттлинг
        let ticking = false;
        const onScrollOrResize = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                update();
                ticking = false;
            });
        };

        window.addEventListener("scroll", onScrollOrResize, {passive: true});
        window.addEventListener("resize", onScrollOrResize);

        return () => {
            window.removeEventListener("scroll", onScrollOrResize);
            window.removeEventListener("resize", onScrollOrResize);
        };
    }, []);

    return (
        <>
            <main>
                <Hero
                    imageSrc="/hero/travel-main-v3.svg"
                    imageAlt="Kaspi Travel"
                    title="Kaspi Travel"
                    description={
                        <>
                            Авиа и ЖД билеты по выгодным ценам
                        </>
                    }
                    buttonText="Найти билеты"
                    onButtonClick={() => console.log("Kaspi Gold click")}
                />
                <Features
                    title={
                        <>
                            Преимущества Kaspi Travel
                        </>
                    }
                    items={ITEMS}
                />
                <Stepper
                    title="Как это работает?"
                    steps={steps}
                    lineColor="#E4573D"
                />
                <PopularRoutes/>
                <PartnersShowCase
                    subtitle={"более 1 500 компаний по всему миру"}
                    partners={PARTNERS}
                />
                <QR
                    qrSrc="/QR/qr-link-travel-new.svg"
                    alt="Kaspi.kz Gold QR Code"
                />
            </main>
            <FixedActionBar
                isVisible={showFixedButton}
                label="Открыть Kaspi Gold"
                onClick={() => console.log("Kaspi Gold opened")}
            />
        </>
    );
}
